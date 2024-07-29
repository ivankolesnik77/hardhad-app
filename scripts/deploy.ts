import { ethers, run } from "hardhat"

import "dotenv/config"

// async function main() {
//     const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
//     console.log('Deploying contract...')
//     const simpleStorage = await SimpleStorageFactory.deploy()
//     await simpleStorage.waitForDeployment()
//     const address = await simpleStorage.getAddress()
//     console.log('Deployed contract address: ', address)

//     if(network.config.chainId == 11011 && process.env.ETHERSCAN_API_KEY){
//         console.log('Verifying...')
//         await simpleStorage.deploymentTransaction()?.wait(6)
//         await verify(address, [])
//     }
// }

async function main() {
    // Deploy Token contract
    const Token = await ethers.getContractFactory("Token")
    const token = await Token.deploy()
    await token.waitForDeployment()
    const addressToken = await token.getAddress()
    console.log("Token deployed to:", addressToken)

    // Deploy EthSwap contract with 1 ether initial value
    const EthSwap = (await ethers.getContractFactory("EthSwap")) as any
    const ethSwap = await EthSwap.deploy(addressToken)
    await ethSwap.waitForDeployment()
    const addressSwap = await ethSwap.getAddress()
    console.log("EthSwap deployed to:", addressSwap)
}

async function verify(contractAddress: string, args: any[]) {
    console.log("Contract verifying...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e: any) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("already verified")
        } else {
            console.log(e.message)
        }
    }
}

main()
    .then(() => process.exit(0))
    .catch((err) => console.log(err))
