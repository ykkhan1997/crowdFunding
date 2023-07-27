'use client'
import React,{useState,useEffect,useContext} from 'react';
import { CrowdFundingContext } from '@/Context/CrowdFunding';
import {Logo,Menu,Close} from './page';
const Navbar = () => {
  const {currentAccount,connectWallet,balance,copyContent} =useContext(CrowdFundingContext);
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  const menuList=["Home","About Us","Contact Us","Blog"];
  return (
    <div className='backgroundMain'>
      <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='relative flex justify-between items-center'>
      <div className='flex items-center'>
      <a
      aria-label='Company'
      title='Company'
      href='/'
      className='inline-flex items-center mr-8'>
      <Logo color={`text-white`}/>
      <span className='text-white ml-2 tracking-wide font-bold font-xl uppercase'>Company</span>
      </a>
      <ul className='lg:flex hidden space-x-8'>
        {
          menuList.map((el,i)=>(
            <li key={i+1}>
              <a className='dimWhite focus:text-white font-medium tracking-wide'
              aria-label='Our Product'
              title='Our Product'
              href='/'>
                {el}
              </a>
            </li>
          ))
        }
      </ul>
      </div>
      <ul className='lg:flex hidden space-x-8'>
        {
          !currentAccount?
          <li>
            <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={connectWallet}
            className='text-white font-medium tracking-wide bg-blue-500 h-12 px-6 rounded shadow-sm hover:bg-blue-800'
            >
              Connect Wallet
            </button>
          </li>:
          <button
          className='h-12 bg-blue-500 inline-flex p-2 -mr-1 items-center bg-cover rounded'
          >
          <div className='text-white font-bold'>{balance.slice(0,4)} Matic</div>
          <div className='bg-slate-200 ml-1 px-2 py-2 font-medium rounded'>{currentAccount.slice(0,6)}...{currentAccount.slice(39)}</div>
          </button>
        }
      </ul>
      <div className='lg:hidden flex z-40 overflow-hidden'>
        <button
        aria-label='Open Menu'
        title='Open Menu'
        href=''
        className='p-2 mr-1'
        onClick={()=>setIsMenuOpen(true)}>
          <Menu/>
        </button>
        {
          isMenuOpen && (
            <div className='absolute top-0 left-0 w-full'>
              <div className='bg-white p-5 rounded shadow-sm'>
                <div className='flex items-center justify-between mb-4 overflow-hidden'>
                  <div>
                    <a
                    aria-label='Company'
                    title='Company'
                    className='inline-flex items-center'>
                      <Logo/>
                      <span className='ml-2 tracking-wide text-xl uppercase font-bold'>Company</span>
                    </a>
                  </div>
                  <div>
                    <button
                    aria-label='Close Menu'
                    title='Close Menu'
                    onClick={()=>setIsMenuOpen(false)}
                    className='p-2 mt-2 mr-2  rounded bg-slate-200 hover:bg-slate-300'>
                      <Close/>
                    </button>
                  </div>
                </div>
                <nav className='space-y-4'>
                  {
                    menuList.map((el,i)=>(
                      <li key={i+1} className='list-none'>
                        <a
                        href='/'
                        aria-label='Our Product'
                        title='Our Product'
                        className='font-medium tracking-wide text-gray-800 hover:text-gray-600'>
                          {el}
                        </a>
                      </li>
                    ))
                  }
                  <li className='list-none'>
                    <button
                    className='h-12 px-6 bg-blue-500 w-full hover:bg-blue-800 rounded shadow-sm text-white font-medium tracking-wide'>
                      Connect Wallet
                      </button>
                  </li>
                </nav>
              </div>
            </div>
          )
        }
      </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar