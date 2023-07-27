"use client";
import React, { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import { contractAddress, contractAddressAbi } from "./constants";

export const CrowdFundingContext = createContext();
const fetchContract = (ProviderOrSigner) =>
  new ethers.Contract(contractAddress, contractAddressAbi, ProviderOrSigner);

export const CrowdFundingProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [balance,setBalance]=useState("");
  const [copyText,setCopyText]=useState();
  const title = "This is my first smart contract";
  const createCampaign = async (campaign) => {
    const { title, description, amount, deadline } = campaign;
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = fetchContract(signer);
    try {
      const transaction = await contract.createCampaign(
        currentAccount,
        title,
        description,
        ethers.parseUnits(amount, 18),
        new Date(deadline).getTime()
      );
      await transaction.wait();
      alert("Created Campaign Successfully");
    } catch (error) {
      alert("transaction fail", error);
    }
  };
  const getCampaigns = async () => {
    const provider = new ethers.JsonRpcApiProvider("");
    const contract = fetchContract(provider);
    const campaigns = await contract.getCampaigns();
    const parsedCampaigns = campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: campaign.target
        ? ethers.formatEther(campaign.target.toStirng())
        : "",
      deadline: parseInt(campaign.deadline),
      amountCollected: campaign.amountCollected
        ? ethers.formatEther(campaign.amountCollected.toStirng())
        : "",
      pId: i,
    }));
    return parsedCampaigns;
  };
  const getUserCampaigns = async () => {
    const provider = new ethers.JsonRpcProvider("");
    const contract = fetchContract(provider);
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const currentUser = accounts[0];
    } else {
      console.log("Please Install web3 wallet");
    }
    const allcampaigns = await contract.getCampaigns();
    const filterCampaigns = await allcampaigns.filter(
      (campaign) => campaign.owner === campaign.owner
    );
    let userData;
    if (window.ethereum) {
      userData = await filterCampaigns.map((campaign, i) => ({
        owner: campaign.owner,
        title: campaign.title,
        description: campaign.description,
        target: campaign.target
          ? ethers.formatEther(campaign.target.toStirng())
          : "",
        deadline: parseInt(campaign.deadline),
        amountCollected: campaign.amountCollected
          ? ethers.formatEther(campaign.amountCollected.toStirng())
          : "",
        pId: i,
      }));
    } else {
      console.log("Please Install web3 wallet");
    }
    await userData;
    return userData;
  };
  const donate = async (pId, amount) => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = fetchContract(signer);
    try {
      const donateTrx = await contract.donateToCampaign(pId, {
        value: ethers.parseEther(amount),
      });
      await donateTrx.wait();
      console.log("successfull donate amount to campaign");
    } catch (error) {
      console.log(error);
    }
  };
  const getDonations = async (pId) => {
    const provider = new ethers.JsonRpcProvider("");
    const contract = fetchContract(provider);
    const donations = await contract.getDonators(pId);
    const numberOfDonations = donations[0].length;
    const parsedDonations = [];
    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.formatEther(donations[0][i].toStirng()),
      });
    }
    return parsedDonations;
  };
  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError("Install Metamask");
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("no account found");
      }
      const provider=new ethers.BrowserProvider(window.ethereum);
      const Balance=await provider.getBalance(accounts[0]);
      const ShowBalance=ethers.formatEther(Balance);
      setBalance(ShowBalance);
    } catch (error) {
      console.log("Something wrong while connecting to web3 wallet");
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);
  const connectWallet = async () => {
      try{
        if (!window.ethereum) return alert("Please Install web3 wallet");
        if(window.ethereum){
          const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          setCurrentAccount(accounts[0]);
        }
      }catch(error){
        console.log("Something wrong while connecting to web3 wallet");
      }
  };
  return (
    <CrowdFundingContext.Provider
      value={{
        checkIfWalletConnected,
        currentAccount,
        title,
        createCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
        checkIfWalletConnected,
        connectWallet,
        balance,
      }}
    >
      {children}
    </CrowdFundingContext.Provider>
  );
};
