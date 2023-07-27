import React from 'react'

const Footer = () => {
  const menuList=["Home","About Us","Contact Us","Blog"];
  const contactList=["support@cryptoking.com","info@cryptKing.com","Contact Us"];
  const useFulLinks=["Erc20","Erc721","Erc1155","Funny Token"];
  return (
    <div className='backgroundMain text-center lg:text-left text-white'>
      <div className='mx-4 py-10 text-center md:text-left'>
        <div className='grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <h6 className='font-semibold text-white tracking-wide mb-4 uppercase'>CryptoKing</h6>
            <p className='dimWhite'>
            Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <h6 className='font-semibold uppercase text-white mb-4 tracking-wide md:justify-start'>Menu</h6>
            {
              menuList.map((menu,i)=>(
                <p className='mb-4 font-medium tracking-wide dimWhite hover:text-white cursor-pointer' key={i+1}>{menu}</p>
              ))
            }
          </div>
          <div>
            <h6 className='font-semibold uppercase text-white tracking-wide mb-4'>Contact Us</h6>
            {
              contactList.map((contact,i)=>(
                <p key={i+1} className='mb-4 font-medium dimWhite hover:text-white cursor-pointer'>{contact}</p>
              ))
            }
          </div>
          <div>
            <h6 className='font-semibold uppercase tracking-wide text-white mb-4'>Useful Links</h6>
            {
              useFulLinks.map((link,i)=>(
                <p key={i+1} className='dimWhite hover:text-white font-medium mb-4 cursor-pointer'>{link}</p>
              ))
            }
          </div>
        </div>
      </div>
      <div className='p-4 text-center'>
        <span>@2021Copyright:</span>
        <a className='font-semibold' href='/'>CryptoKing</a>
      </div>
    </div>
  )
}

export default Footer