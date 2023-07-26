'use client'
import React, { useContext, useEffect } from 'react'
import { CrowdFundingContext } from '@/Context/CrowdFunding'
import { Navbar,Footer } from '@/Components';
const Home = () => {
  const {title}=useContext(CrowdFundingContext);
  return (
    <>
    <Navbar/>
    <div>{title}</div>
    <Footer/>
    </>
  )
}

export default Home