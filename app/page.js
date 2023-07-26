'use client'

import React,{useContext} from 'react'
import { CrowdFundingContext } from '@/Context/CrowdFunding'
const Home = () => {
  const {title}=useContext(CrowdFundingContext);
  return (
    <div>{title}</div>
  )
}

export default Home