const {expect}=require("chai");
const {ethers}=require("hardhat");


describe("CrowdFunding",function(){

    let title="Education";
    let description="For Learning Purpose";
    let target=ethers.parseEther("10");
    let deadline=Math.floor(Date.now()/1000)+3600;
    let owner,addr1,addr2;
    let contract;
    let createCampaign;
    let id;

    beforeEach(async()=>{
        const CrowdFunding=await ethers.getContractFactory("CrowdFunding");
        contract=await CrowdFunding.deploy();
        [owner,addr1,addr2]=await ethers.getSigners();
        createCampaign=await contract.createCampaign(owner.address,title,description,target,deadline);
        id=await contract.numberOfCampaigns()-BigInt(1);
        
        
    });
    it("should check the assign values in create campaign",async function(){
        let campaign=await contract.campaigns(id);
        expect(campaign.owner).to.equal(owner.address);
        expect(campaign.title).to.equal(title);
        expect(campaign.description).to.equal(description);
        expect(campaign.target).to.equal(target);
        expect(campaign.deadline).to.equal(deadline);
        expect(campaign.amountCollected).to.equal(0);

    });
    it("should revert if the target amount is not greater than 0 or campaign is ended",async function(){
        const target2=ethers.parseEther("0");
        let deadline2=Math.floor(Date.now()/1000)-3600;
        await expect(contract.createCampaign(addr1.address,title,description,target2,deadline)).to.be.revertedWith(
            "The amount should be greater than 0"
        );
    });
    it("should donate a campaign",async function(){
        const amount=ethers.parseEther("8");
        const donateTrx=await contract.donateToCampaign(id,{value:amount});
        const campaign=await contract.campaigns(id);
        expect(campaign.amountCollected).to.equal(amount);
    });
    it("should return the list of donators and their donations",async function(){
        const amount=ethers.parseEther("10");
        const donateTrx=await contract.connect(addr1).donateToCampaign(id,{value:amount});
        const [donators,donations]=await contract.getDonators(id);
        expect(donators[0]).to.equal(addr1.address);
        expect(donations[0]).to.equal(amount);
        console.log(donators[0],donations[0]);
    });
    it("should revert with error if donate amount is greater than required amount",async function(){
        const amount=ethers.parseEther("11");
        await expect(contract.donateToCampaign(id,{value:amount})).to.be.revertedWith(
            "The donate amount must be greater than 0 or less than required Amount"
        );
        const amount2=ethers.parseEther("0");
        await expect(contract.donateToCampaign(id,{value:amount2})).to.be.revertedWith(
            "The donate amount must be greater than 0 or less than required Amount"
        );
    });

});