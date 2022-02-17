require("dotenv").config()
const HDWalletProvider = require("@truffle/hdwallet-provider")
const SecretRecoverPhrase = process.env.PRIVATE_KEYS || ""

module.exports = {
  networks: {
    ethereum: {
      provider: () => {
        return new HDWalletProvider(
          SecretRecoverPhrase,
          `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
        )
      },
      network_id: 1,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: false,
    },
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(
          SecretRecoverPhrase,
          `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
        )
      },
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: false,
    },
    bsc: {
      provider: () =>
        new HDWalletProvider(
          SecretRecoverPhrase,
          `https://bsc-dataseed1.binance.org`
        ),
      network_id: 56,
      confirmations: 2,
      timeoutBlocks: 10000,
      skipDryRun: false,
    },
    bsc_testnet: {
      provider: () =>
        new HDWalletProvider(
          SecretRecoverPhrase,
          `https://data-seed-prebsc-1-s1.binance.org:8545`
        ),
      network_id: 97,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: false,
    },
  },
  mocha: {
    timeout: 100000,
  },
  compilers: {
    solc: {
      version: "0.8.12",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
  contracts_directory: "./contracts",
  contracts_build_directory: "./src/configs/abis/Generated",
  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: `${process.env.ETHERSCAN_API_KEY}`,
    bscscan: `${process.env.BSCSCAN_API_KEY}`,
  },
}
