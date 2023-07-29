'use client'
import React, { useEffect, useState } from 'react'     
import Close from './Close';

const PopUp = ({donate,donateFunction,getDonations,setOpenModel}) => {
    const [amount,setAmount]=useState("");
    const [donationData,setDonationData]=useState();
    const createDonations=async()=>{
        try{
            const data=await donateFunction(donate.pId,amount);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        const fetchData=async()=>{
            const donationListData=await getDonations(donate.pId);
            setDonationData(donationListData);
        }
        fetchData();
    },[]);
  return (
    <div className='flex items-center justify-center overflow-x-hidden overflow-y-auto inset-0 z-50 fixed focus:outline-none'>
        <div className='relative w-auto mx-auto my-6 max-w-3xl'>
            {/**Content */}
            <div className='border rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/**Hader */}
                <div className='flex items-start justify-between p-5 border border-b border-solid border-slate-200 rounded-t'>
                    <h3 className='font-semibold text-3xl'>{donate.title}</h3>
                    <button className='p-1    float-right text-3xl leading-none font-semibold outline-none focus:outline-none bg-slate-200'
                    onClick={()=>setOpenModel(false)}
                    >
                        <Close/>
                        </button>
                </div>
                {/**Body */}
                <div className='relative p-6 flex-auto'>
                    <p className='my-4 text-slate-500 text-lg leading-relaxed'>{donate.description}</p>
                    <input
                    placeholder='amount'
                    required
                    id='firstName'
                    name='firstName'
                    type='number'
                    className='flex-grow w-full h-12 px-6 bg-white border border-gray-300 focus:outline-none rounded shadow-sm appearence-none'
                    onChange={(e)=>setAmount(e.target.value)}
                    />
                    {
                        donationData?.map((donate,i)=>(
                            <p className='my-4 text-slate-500 text-lg leading-relaxed'>
                                {i+1}{donate.donation}{" "}
                                {donate.donator.slice(0,35)}
                            </p>
                        ))
                    }
                </div>
                {/**Body */}
                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-t'>
                    <button 
                    onClick={()=>setOpenModel(false)}
                    className='text-red-500 bg-transparent font-bold uppercase px-6 py-2 text-sm  mr-1 mb-1 focus:outline-none'>Close</button>
                    <button
                    className='bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg  mr-1 mb-1'
                    type='button'
                     onClick={()=>(!window.ethereum?alert("Please Install web3 wallet for create donation"):createDonations() && amount==""?alert("please enter the amount to donate"):"")}
                     >
                        Donate
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopUp