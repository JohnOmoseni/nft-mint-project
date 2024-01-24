import hre from "hardhat";

const contractAddress = "0xf9A7E012e1806Ac9f82AE73F90ABE2EEb2a46334"

async function main() {
  const InfinityNFT = await hre.ethers.getContractFactory(
    "InfinityNFT"
    );
  const nft = await InfinityNFT.deploy(contractAddress)
  console.log("InfinityWealthNFT deployed at: ", nft.target);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
