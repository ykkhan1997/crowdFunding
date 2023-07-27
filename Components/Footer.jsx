import React from 'react'

const Footer = () => {
  const menuList=["Home","About","Contact","Blog"];
  const contacList=["abc@gmail.com","def@cryptoKing.com","Contact Us"];
  const usefulLinks=["Contact","Erc20","Erc721","Erc755"];
  return (
   <div className='text-center backgroundMain dimWhite focus:text-white  lg:text-left'>
    <div className='mx-6 py-10 text-center md:text-left'>
      <div className='grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
        <div>
          <h6 className='mb-4 font-semibold uppercase justify-center md:justify-start'>Crypto King</h6>
          <p>Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>  
        </div>
        <div className=''>
          <h6 className='mb-4 font-semibold uppercase justify-center md:justify-start'>Menu</h6>
          {
            menuList.map((menu,i)=>(
             <p className='mb-4 font-semibold cursor-pointer'key={i+1}>{menu}</p>
            ))
          }
        </div>
        <div>
          <h6 className='font-semibold justify-center uppercase md:justify-start mb-4'>Contact</h6>
          {
            contacList.map((contact,i)=>(
              <p className='mb-4 font-semibold cursor-pointer'>{contact}</p>
            ))
          }
        </div>
        <div>
          <h6 className='font-semibold uppercase mb-4 justify-center md:justify-start'>Userful Links</h6>
          {
            usefulLinks.map((link,i)=>(
              <p key={i+1} className='font-semibold mb-4 cursor-pointer'>{link}</p>
            ))
          }
        </div>
      </div>
    </div>
    <div className='text-center p-6'>
      <span>@2023 Copyright:</span>
      <a className='font-semibold' href='/'>CryptoKing</a>
    </div>
   </div>
  )
}

export default Footer