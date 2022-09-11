require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const { apiUrl, privateKey, apiKey } = process.env;

module.exports = {
  solidity: {
    version: "0.8.0"
  },
  paths: {
    artifacts: "../frontend/src/artifacts",
  },
  networks: {
    matic: {
      url: apiUrl,
      accounts: [privateKey]
    }
  },
  etherscan: {
    apiKey: apiKey
  }
};
