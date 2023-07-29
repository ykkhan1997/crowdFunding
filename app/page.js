'use client'
import React,{ useState,useEffect,useContext } from 'react';
import { CrowdFundingContext } from '@/Context/CrowdFunding';
import { Hero,Card } from '@/Components/page';

const Home = () => {
  const {titleData,createCampaign,getCampaigns,getUserCampaigns}=useContext(CrowdFundingContext);
  const [allCampaigns,setAllCampaigns]=useState();
  const [userCampaign,setUserCampaign]=useState();
  
  useEffect(()=>{
    const fetchData=async()=>{
      const AllData=await getCampaigns();
      const userData=await getUserCampaigns();
      setAllCampaigns(AllData);
      setUserCampaign(userData);
    }
    fetchData();
  },[]);
  return (
    <>
    <Hero titleData={titleData} createCampaign={createCampaign}/>
    <Card title="All Campaigns" allcampaign={allCampaigns}/>
    <Card title="User Campaign" allcampaign={userCampaign}/>
    </>
  )
}

export default Home