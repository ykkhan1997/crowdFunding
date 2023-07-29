'use client'
import React,{ useState,useEffect,useContext } from 'react';
import { CrowdFundingContext } from '@/Context/CrowdFunding';
import { Hero,Card,PopUp } from '@/Components/page';

const Home = () => {
  const {titleData,createCampaign,getCampaigns,getUserCampaigns,donate,getDonations}=useContext(CrowdFundingContext);
  const [allCampaigns,setAllCampaigns]=useState();
  const [userCampaign,setUserCampaign]=useState();
  const[openModel,setOpenModel]=useState(false);
  const [donateCampaign,setDonateCampaign]=useState();
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
    <Card title="All Campaigns" allcampaign={allCampaigns} setOpenModel={setOpenModel} setDonate={setDonateCampaign}/>
    <Card title="User Campaign" allcampaign={userCampaign} setOpenModel={setOpenModel} setDonate={setDonateCampaign}/>
    {
      openModel && (
        <PopUp donate={donateCampaign} donateFunction={donate} getDonations={getDonations} setOpenModel={setOpenModel}/>
      )
    }
    </>
  )
}

export default Home