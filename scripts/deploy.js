const { ethers } = require("hardhat");


async function main(){
    const CrowdFunding=await ethers.deployContract("CrowdFunding");
    const crowdfunding=await CrowdFunding.waitForDeployment();
    console.log(crowdfunding.target);
}

main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.log(error);
    process.exit(1);
})