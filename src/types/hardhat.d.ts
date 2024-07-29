/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "EthSwap",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EthSwap__factory>;
    getContractFactory(
      name: "Lock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lock__factory>;
    getContractFactory(
      name: "SimpleStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimpleStorage__factory>;
    getContractFactory(
      name: "Token",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Token__factory>;

    getContractAt(
      name: "EthSwap",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.EthSwap>;
    getContractAt(
      name: "Lock",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Lock>;
    getContractAt(
      name: "SimpleStorage",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.SimpleStorage>;
    getContractAt(
      name: "Token",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.Token>;

    deployContract(
      name: "EthSwap",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.EthSwap>;
    deployContract(
      name: "Lock",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Lock>;
    deployContract(
      name: "SimpleStorage",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SimpleStorage>;
    deployContract(
      name: "Token",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Token>;

    deployContract(
      name: "EthSwap",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.EthSwap>;
    deployContract(
      name: "Lock",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Lock>;
    deployContract(
      name: "SimpleStorage",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.SimpleStorage>;
    deployContract(
      name: "Token",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.Token>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
