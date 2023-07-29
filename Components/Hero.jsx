'use client'
import React, { useState } from 'react'
import {Style,Arrow} from './page';

const Hero = ({createCampaign,titleData}) => {
  const [campaign,setCampaign]=useState({
    title:"",
    description:"",
    amount:"",
    deadline:""
  });
  const createNewCampaign=async(e)=>{
    e.preventDefault();
    try{
      const data=await createCampaign(campaign);
      console.log(data);
      if(campaign.title==""){
        alert("Require title field");
      }else if(campaign.description==""){
        alert("Require description field");
      }else if(campaign.amount==""){
        alert("amout field is empty");
      }else if(campaign.deadline==""){
        alert("deadline field is empty");
      }
    }catch(error){
      console.log(error);
    }
    setTimeout(() => {
      location.reload();
    }, 5000);
  }
  return (
    <div className='relative'>
      <span></span>
      <img
      src='https://coinguides.org/wp-content/uploads/2020/11/bitcoin-funding-rate.jpg'
      alt='image'
      className='absolute object-cover w-full h-full inset-0'
      />
      <div className='relative bg-opacity-75 backgroundMain'>
        <Style/>
        <div className='relative overflow-hidden px-4 py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div className='flex flex-col items-center justify-between lg:flex-row'>
            <div className='w-full max-w-xl mb-16 xl:mb-0 pr-16 xl:w-7/12'>
              <h2 className='text-white mb-6 font-bold font-sans text-3xl tracking-tight sm:leading-none sm:text-5xl max-w-lg'>Crypto King<br className='md:block hidden'/>CryptoFunding Ck</h2>
              <p className='max-w-xl mb-4 dimWhite text-base md:text-lg'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                quae.
              </p>
              <a
              aria-label=''
              href=''
              className='inline-flex items-center font-semibold tracking-wider dimWhite hover:text-white'>
                Learn More
                <Arrow/>
              </a>
            </div>
            <div className='w-full max-w-xl xl:px-8 xl:w-5/12'>
              <div className='bg-white rounded shadow-md p-7 sm:p-10'>
                <h3 className='mb-4 text-xl font-semibold sm:text-2xl sm:text-center sm:mb-6'>Campaign</h3>
                <form>
                  <div className='mb-1 sm:mb-2'>
                    <label htmlFor='firstName'
                    className='inline-block mb-1 font-medium'>
                      Title
                      </label>
                      <input
                      required
                      type='text'
                      placeholder='Title'
                      id='firstName'
                      name='firstName'
                      onChange={(e)=>setCampaign({...campaign,title:e.target.value})}
                      className='flex-grow w-full h-12 px-6 rounded border border-gray-300 focus:outline-none focus:shadow-inline'/>
                  </div>
                  <div className='mb-1 sm:mb-2'>
                    <label htmlFor='lastName'
                    className='inline-block mb-1 font-medium'>
                      Description
                    </label>
                    <input
                    required
                    type='text'
                    placeholder='Description'
                    id='lastName'
                    name='lastName'
                    onChange={(e)=>setCampaign({...campaign,description:e.target.value})}
                    className='flex-grow w-full h-12 px-6 rounded border border-gray-300 outline-none focus:shadow-inner'
                    />
                  </div>
                  <div className='mb-1 sm:mb-2'>
                    <label
                    htmlFor='email'
                    className='inline-block mb-1 font-medium'>
                      Target Amount:
                    </label>
                    <input
                    placeholder='Amount'
                    type='number'
                    id='email'
                    name='email'
                    onChange={(e)=>setCampaign({...campaign,amount:e.target.value})}
                    className='flex-grow w-full h-12 px-6 rounded border border-gray-300 focus:outline-none focus:shadow-inner'
                    />
                  </div>
                  <div className='mb-1 sm:mb-2'>
                    <label
                    htmlFor='email'
                    className='inline-block mb-1 font-medium'
                    >
                      Deadline
                    </label>
                    <input
                    placeholder='Deadline'
                    id='email'
                    name='email'
                    type='date'
                    onChange={(e)=>setCampaign({...campaign,deadline:e.target.value})}
                    className='flex-grow w-full h-12 px-6 rounded border border-gray-300 focus:outline-none focus:shadow-inner'
                    />
                  </div>
                  <div className='mt-4 mb-2 sm:mb-4'>
                    <button
                    type='submit'
                    onClick={(e)=>window.ethereum?createNewCampaign(e):alert("Please Install Web3 wallet for crete campaign")}
                    className='h-12 px-6 w-full shadow-md font-medium tracking-wide rounded inline-flex items-center justify-center'
                    >
                      Create Campaign
                      </button>
                  </div>
                  <p className='text-xs text-gray-600 sm:text-sm'>
                    Create your campaign for raise funds
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero