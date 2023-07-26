// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity^0.8.9;

contract CrowdFunding{
    struct Campaign{
        address owner;
        string title;
        string description;
        uint256 target;
        uint256 deadline;
        uint256 amountCollected;
        address[] donators;
        uint256[] donations;
    }
    mapping(uint256=>Campaign) public campaigns;
    uint256 public numberOfCampaigns=0;
    function createCampaign(address _owner,string memory _title,string memory _description,uint256 _target, uint256 _deadline)public returns(uint256){
        Campaign storage campaign=campaigns[numberOfCampaigns];
        require(campaign.deadline<block.timestamp,"The deadline should be a date in the future");
        require(_target>0,"The amount should be greater than 0");
        campaign.owner=_owner;
        campaign.title=_title;
        campaign.description=_description;
        campaign.target=_target;
        campaign.deadline=_deadline;
        campaign.amountCollected=0;
        numberOfCampaigns++;
        return numberOfCampaigns-1;
    }
    function donateToCampaign(uint256 _id)public payable{
        uint256 amount=msg.value;
        Campaign storage campaign=campaigns[_id];
        require(amount>0 && amount<=campaign.target,"The donate amount must be greater than 0 or less than required Amount");
        campaign.donators.push(msg.sender);
        campaign.donations.push(amount);
        (bool sent, )=payable(campaign.owner).call{value:amount}("");
        if(sent){
            campaign.amountCollected=campaign.amountCollected+amount;
        }
    }
    function getDonators(uint256 _id) public view returns(address[] memory,uint256[] memory){

        return(campaigns[_id].donators,campaigns[_id].donations);
    }
    function getCampaigns()public view returns(Campaign[] memory){
        Campaign[] memory allCampaign=new Campaign[](numberOfCampaigns);

        for(uint256 i=0;i<numberOfCampaigns;i++){
            Campaign storage items=campaigns[i];
            allCampaign[i]=items;
        }
        return allCampaign;

    }
}