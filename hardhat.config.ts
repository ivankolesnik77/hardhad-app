import { HardhatUserConfig } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "dotenv/config"
import "hardhat-gas-reporter"
// This adds support for typescript paths mappings

// localhost: {
//     url: "http://127.0.0.1:8545/",
//     chainId: 31173,
// },

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

const config: HardhatUserConfig = {
      solidity: "0.8.19",
      networks: {
            sepolia: {
                  url: process.env.RPC_URL!,
                  accounts: [process.env.PRIVATE_KEY!],
                  chainId: 11011,
            },
      },
      typechain: {
            outDir: "src/types",
            target: "ethers-v6",
            alwaysGenerateOverloads: false, // should overloads with full signatures like deposit(uint256) be generated always, even if there are no overloads?
            externalArtifacts: ["externalArtifacts/*.json"], // optional array of glob patterns with external artifacts to process (for example external libs from node_modules)
            dontOverrideCompile: false,
      },

      etherscan: {
            apiKey: process.env.ETHERSCAN_API_KEY,
            
      },
      gasReporter: {
            currency: 'USD',
            enabled: true,
            noColors: true,
            outputFile: "gas-reporter.txt",
            coinmarketcap: COINMARKETCAP_API_KEY,
            token: "MATIC",
            offline: true
      }
}

export default config
