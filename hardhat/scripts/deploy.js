const { ethers } = require("hardhat");

async function main() {
 
  const whitelistContract = await ethers.getContractFactory("whitelist");

  
  const deployedWhitelistContract = await whitelistContract.deploy(10);
  
  await deployedWhitelistContract.deployed();

  // print the address of the deployed contract
  console.log("Whitelist Contract Address:", deployedWhitelistContract.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });