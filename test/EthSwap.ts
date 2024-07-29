import {
      time,
      loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers"
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs"
import { expect } from "chai"
import { artifacts, ethers } from "hardhat"
import assert from "assert"

// import { Token } from "../typechain-types"

describe("EthSwap", function () {
      const ONE_GWEI: bigint = 1_000_000_000n

      async function deployTokenFixture() {
            const [owner, investor, addr2] = await ethers.getSigners()
            const token = await ethers.deployContract("Token")
            // console.log(token)
            await token.waitForDeployment()
            const tokenAddress = await token.getAddress()

            const ethSwap = await ethers.deployContract(
                  "EthSwap",
                  [tokenAddress],
                  {
                        from: owner,
                  },
            )
            const ethSwapAddress = await ethSwap.getAddress()
            const transferAmount = ethers.parseEther("10000")

            await ethSwap.waitForDeployment()
            await token.transfer(ethSwapAddress, transferAmount)
            return { token, ethSwap, owner, investor, addr2, ethSwapAddress }
      }

      // describe("Deployment", function () {
      //     it("Should set the right owner", async function () {
      //         const { ethSwap, owner } = await loadFixture(deployTokenFixture)
      //         const contractOwner = await ethSwap.owner()

      //         expect(contractOwner).to.equal(owner.address)
      //     })

      //     it("Should receive and store the funds to lock", async function () {
      //         const { ethSwap } = await loadFixture(deployTokenFixture)
      //         const lockedAmount = ONE_GWEI
      //         expect(await ethers.provider.getBalance(ethSwap.target)).to.equal(
      //             lockedAmount,
      //         )
      //     })
      // })

      //   describe("Token", function () {
      //         it("Should assign the total supply of tokens to the owne", async function () {
      //               const { token, owner } = await loadFixture(deployTokenFixture)

      //               const ownerBalance = await token.balanceOf(owner.address)
      //               console.log(ownerBalance)
      //               expect(await token.totalSupply()).to.equal(ownerBalance)
      //         })

      //         it("Should transfer tokens to address ", async function () {
      //               const { token, owner, investor } =
      //                     await loadFixture(deployTokenFixture)
      //               const transferAmount = ethers.parseEther("2")

      //               await expect(token.transfer(investor.address, transferAmount))
      //                     .to.emit(token, "Transfer")
      //                     .withArgs(owner, investor, ethers.parseEther("2"))

      //               const addr1Balance = await token.balanceOf(investor.address)
      //               expect(addr1Balance).to.equal(ethers.parseEther("2"))
      //         })

      //         it("Should change tokens balances", async function () {
      //               const { token, owner, investor } =
      //                     await loadFixture(deployTokenFixture)

      //               const transferAmount = ethers.parseEther("2")

      //               await expect(
      //                     token.transfer(investor.address, transferAmount),
      //               ).to.changeEtherBalance(
      //                     token,
      //                     [owner, investor],
      //                     [-transferAmount, transferAmount],
      //               )
      //         })
      //   })

      describe("Buy tokens", function () {
            let result,
                  ethSwapAddress: string,
                  rate = 100,
                  amountBought = ethers.parseEther("10").toString()

            before(async () => {
                  const { token, ethSwap, investor, owner } =
                        await loadFixture(deployTokenFixture)

                  await ethSwap.connect(investor).buyToken({
                        value: amountBought,
                        from: investor,
                  })
            })

            it("Should transfer tokens to address ", async function () {
                  const { token, investor, ethSwap } =
                        await loadFixture(deployTokenFixture)

                  const investorBalance = await token.balanceOf(investor)
                  console.log(
                        "Investor: ",
                        investor.address,
                        " ",
                        investorBalance.toString(),
                  )
                  await assert.equal(
                        investorBalance.toString(),
                        ethers.parseEther("100"),
                  )

                  //   const ethSwapBalance = await token.balanceOf(ethSwapAddress)
                  //   expect(ethSwapBalance).equal(999900)
                  //   const ethSwapEthBalance =
                  //         await ethers.provider.getBalance(ethSwapAddress)
                  //   expect(ethSwapEthBalance).equal(ethers.parseEther("1"))
            })
      })

      //     describe("Sell tokens", () => {
      //     let result,
      //     ethSwapAddress: string,
      //     rate = 100,
      //     amountBought = ethers.parseEther("1")

      // before(async () => {
      //     const { token, ethSwap, investor } =
      //             await loadFixture(deployTokenFixture)
      //     //   const addressEthSwap = await ethSwap.getAddress()
      //     //   await token.approve(addressEthSwap, amountBought, {
      //     //         from: investor,
      //     //   })

      //     ethSwapAddress = await ethSwap.getAddress()

      //     result = await ethSwap.buyToken({
      //             from: investor,
      //             value: amountBought,
      //     })
      // })
      // })

      // describe("EthSwap", function () {

      //     it("Should revert with the right error if called from another account", async function () {
      //       const { lock, unlockTime, otherAccount } = await loadFixture(
      //         deployOneYearLockFixture
      //       );

      //       // We can increase the time in Hardhat Network
      //       await time.increaseTo(unlockTime);

      //       // We use lock.connect() to send a transaction from another account
      //       await expect(lock.connect(otherAccount).withdraw()).to.be.revertedWith(
      //         "You aren't the owner"
      //       );
      //     });

      //     it("Shouldn't fail if the unlockTime has arrived and the owner calls it", async function () {
      //       const { lock, unlockTime } = await loadFixture(
      //         deployOneYearLockFixture
      //       );

      //       // Transactions are sent using the first signer by default
      //       await time.increaseTo(unlockTime);

      //       await expect(lock.withdraw()).not.to.be.reverted;
      //     });
      //   });

      //   describe("Events", function () {
      //     it("Should emit an event on withdrawals", async function () {
      //       const { lock, unlockTime, lockedAmount } = await loadFixture(
      //         deployOneYearLockFixture
      //       );

      //       await time.increaseTo(unlockTime);

      //       await expect(lock.withdraw())
      //         .to.emit(lock, "Withdrawal")
      //         .withArgs(lockedAmount, anyValue); // We accept any value as `when` arg
      //     });
      //   });

      //   describe("Transfers", function () {
      //     it("Should transfer the funds to the owner", async function () {
      //       const { lock, unlockTime, lockedAmount, owner } = await loadFixture(
      //         deployOneYearLockFixture
      //       );

      //       await time.increaseTo(unlockTime);

      //       await expect(lock.withdraw()).to.changeEtherBalances(
      //         [owner, lock],
      //         [lockedAmount, -lockedAmount]
      //       );
      //     });
      //   });
      // })
})
