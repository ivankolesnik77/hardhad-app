import { buildModule } from "@nomicfoundation/hardhat-ignition/modules"
import { ethers } from "ethers"

const ONE_GWEI: bigint = 1_000_000_000n

const TokenModule = buildModule("TokenModule", (m) => {
      const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI)
      const token = m.contract("Token", [], { value: lockedAmount })

      return { token }
})

const EthSwapModule = buildModule("EthSwapModule", (m) => {
      const { token } = m.useModule(TokenModule)

      const ethSwap = m.contract("EthSwap", [token], {
            value: ethers.parseEther("1"),
      })

      return { ethSwap }
})

export default EthSwapModule
