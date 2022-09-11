require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const { API_URL, PRIVATE_KEY, API_KEY } = process.env;

module.exports = {
  solidity: {
    version: "0.8.0"
  },
  paths: {
    artifacts: "../frontend/src/artifacts",
  },
  networks: {
    matic: {
      url: API_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: API_KEY
  }
};
