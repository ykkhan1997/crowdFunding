import React from 'react'

const Card = ({title,allCampaign}) => {
    const daysLeft=(deadline)=>{
        const difference=new Date(deadline).getTime()-Date.now();
        const remainingDays=difference/(1000*3600*24);
        return remainingDays.toFixed(0);
    }
  return (
    <div className='px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <p className='py-20 font-semibold leading-5 text-2xl'>{title}</p>
        <div className='grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:max-auto lg:max-w-full'>
            {
                allCampaign?.map((campaign,i)=>(

                    <div key={i+1}
                    className='cursor-pointer overflow-hidden border bg-white rounded'>
                        <img
                        src='https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260'
                        alt=''
                        className='object-cover w-full h-64 rounded'
                        />
                        <div className='py-5 pl-2'>
                            <p>DaysLeft:{daysLeft(campaign.deadline)}</p>
                            <a
                            aria-label='article'
                            href=''
                            className='inline-block text-black mb-3'>
                                <p className='text-2xl font-bold leading-5'>{campaign.title}</p>
                            </a>
                            <p className='mb-4 text-gray-700'>{campaign.description}</p>
                            <div className='flex space-x-4'>
                                <p className='font-semibold'>Target:{campaign.target}Matic</p>
                                <p className='font-semibold'>{campaign.amountCollected}Matic</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Card