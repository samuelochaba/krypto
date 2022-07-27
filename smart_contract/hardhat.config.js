//https://eth-goerli.g.alchemy.com/v2/n3sj8Whuh5GIDRdGxYZgc36sp1H1szX_

// require("@nomicfoundation/hardhat-toolbox");

require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/n3sj8Whuh5GIDRdGxYZgc36sp1H1szX_",
      accounts: [
        "3efb735f018ace13e1378c5aae18446d7dae01140174936a439d1f93dc810c3d",
      ],
    },
  },
};
