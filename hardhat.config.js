require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({path:".env.local"});
const alchemyUrl=process.env.NEXT_PUBLIC_ALCHEMY_URL;
const privateKey=process.env.NEXT_PUBLIC_PRIVATE_KEY;
module.exports = {
  solidity: "0.8.19",
  defaultNetwork:"polygon",
  networks:{
    polygon:{
      url:alchemyUrl,
      accounts:[privateKey]
    }
  }
};
