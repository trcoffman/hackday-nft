async function main() {
   const HackDayNFT = await ethers.getContractFactory("HackDayNFT");

   // Start deployment, returning a promise that resolves to a contract object
   const hackDayNFT = await HackDayNFT.deploy();
   console.log("Contract deployed to address:", hackDayNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });