//hardhat库使用ethers组件与区块链进行交互
const { ethers } = require("hardhat");

//主函数
async function main() {   
    const [deployer] = await ethers.getSigners();

    console.log(
      "Deploying GLDToken contracts with the account:",
      deployer.address
    );
    
    //ERC20
    const GLDToken = await ethers.getContractFactory("GLDToken");
    const gLDToken = await GLDToken.deploy("1000");
    console.log("GLDToken address:", gLDToken.address);

    //ECR721
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const myNFT = await MyNFT.deploy();
    console.log("MyNFT address:", myNFT.address);

    //Value
    //const GVault = await ethers.getContractFactory("Vault");
    //const gVault= await GVault.deploy();
    //console.log("gVault address:", gVault.address);

    //deposite
    //GLDToken.deposite("0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE","1000");

    //withdraw
   //gVault.withdraw("0x959922bE3CAee4b8Cd9a407cc3ac1C251C2007B1","0x70997970c51812dc3a010c7d01b50e0d17dc79c8",50);
}

//执行部署
main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});