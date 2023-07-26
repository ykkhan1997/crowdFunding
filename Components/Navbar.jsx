
'use client'
import React,{useState,useContext} from 'react'

import { CrowdFundingContext } from '@/Context/CrowdFunding';
import { Logo } from '.';
import Menu from './Menu';
const Navbar = () => {
  const {currentAccount,connectWallet,balance}=useContext(CrowdFundingContext);
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  console.log(balance);
  const menuList=["Home","About Us","Contact Us","Blog"];
  return (
    <div className='bg-black'>
      <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='relative flex justify-between items-center'>
          <div className='flex items-center'>
            <a
            aria-label='Company'
            title='Company'
            href='/'
            className='inline-flex items-center mr-8'>
            <Logo color={`text-white`}/>
            <span className=' ml-2 text-white text-xl font-bold tracking-wide uppercase'>Company</span>
            </a>
            <ul className='lg:flex hidden space-x-8'>
              {
                menuList.map((el,i)=>(
                  <li key={i+1}>
                    <a
                    aria-label='Our Product'
                    title='Our Product'
                    href='/'
                    className='dimWhite focus:text-white font-medium tracking-wide'>
                      {el}
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
            <ul className='lg:flex hidden space-x-8'>
              {
                !currentAccount?<li>
                <button
                aria-label='Open Menu'
                title='Open Menu'
                onClick={connectWallet}
                className='text-white font-medium h-12 px-6 bg-blue-500 hover:bg-blue-700 rounded-lg shadow-sm'>
                  Connect Wallet
                </button>
              </li>:
              <div className='text-black bg-blue-500 h-12 pt-3 p-2 font-medium rounded self-center'>
                {currentAccount.slice(0,6)}...{currentAccount.slice(39)}
                <span className='bg-slate-300 p-2 rounded-2xl ml-1 font-medium'>{balance.slice(0,4)} Matic</span></div>
              }
            </ul>
            <div className='lg:hidden flex z-40 overflow-hidden'>
              <button
              aria-label='open Menu'
              title='Open Menu'
              className='p-2 mr-1'
              onClick={()=>setIsMenuOpen(true)}>
                <Menu/>
              </button>
              {
                isMenuOpen && 
                <div className='absolute top-0 left-0 w-full'>
                  <div className='bg-white p-5 rounded shadow-sm'>
                    <div className='flex items-center justify-between mb-4'>
                      <a>
                        <Logo/>
                        <span>Company</span>
                      </a>
                    </div>
                  </div>
                </div>
              }
            </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar;