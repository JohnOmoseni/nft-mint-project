require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

console.log(process.env.VITE_APP_MUMBAI_RPC_URL)

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: "0.8.20",
  networks: {
    mumbai: {
      url: process.env.VITE_APP_MUMBAI_RPC_URL,
      accounts: [process.env.VITE_APP_PRIVATE_KEY ]
    }
  },
  etherscan: {
    apiKey: process.env.VITE_APP_POLYGONSCAN_KEY,
  },
  sourcify: {
  enabled: true
}
};
