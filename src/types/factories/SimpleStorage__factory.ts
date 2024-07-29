/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { SimpleStorage, SimpleStorageInterface } from "../SimpleStorage";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_favoriteNumber",
        type: "uint256",
      },
    ],
    name: "addPerson",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "people",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "favoriteNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_favoriteNumber",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506107b1806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80632e64cec1146100515780636057361d1461006f5780636f760f411461008b5780639e7a13ad146100a7575b600080fd5b6100596100d8565b604051610066919061026b565b60405180910390f35b610089600480360381019061008491906102bc565b6100e1565b005b6100a560048036038101906100a0919061034e565b6100eb565b005b6100c160048036038101906100bc91906102bc565b610196565b6040516100cf92919061043e565b60405180910390f35b60008054905090565b8060008190555050565b6001604051806040016040528085858080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050508152602001838152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001908161018491906106a9565b50602082015181600101555050505050565b600181815481106101a657600080fd5b90600052602060002090600202016000915090508060000180546101c9906104cc565b80601f01602080910402602001604051908101604052809291908181526020018280546101f5906104cc565b80156102425780601f1061021757610100808354040283529160200191610242565b820191906000526020600020905b81548152906001019060200180831161022557829003601f168201915b5050505050908060010154905082565b6000819050919050565b61026581610252565b82525050565b6000602082019050610280600083018461025c565b92915050565b600080fd5b600080fd5b61029981610252565b81146102a457600080fd5b50565b6000813590506102b681610290565b92915050565b6000602082840312156102d2576102d1610286565b5b60006102e0848285016102a7565b91505092915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261030e5761030d6102e9565b5b8235905067ffffffffffffffff81111561032b5761032a6102ee565b5b602083019150836001820283011115610347576103466102f3565b5b9250929050565b60008060006040848603121561036757610366610286565b5b600084013567ffffffffffffffff8111156103855761038461028b565b5b610391868287016102f8565b935093505060206103a4868287016102a7565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b838110156103e85780820151818401526020810190506103cd565b60008484015250505050565b6000601f19601f8301169050919050565b6000610410826103ae565b61041a81856103b9565b935061042a8185602086016103ca565b610433816103f4565b840191505092915050565b600060408201905081810360008301526104588185610405565b9050610467602083018461025c565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806104e457607f821691505b6020821081036104f7576104f661049d565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b60006008830261055f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610522565b6105698683610522565b95508019841693508086168417925050509392505050565b6000819050919050565b60006105a66105a161059c84610252565b610581565b610252565b9050919050565b6000819050919050565b6105c08361058b565b6105d46105cc826105ad565b84845461052f565b825550505050565b600090565b6105e96105dc565b6105f48184846105b7565b505050565b5b818110156106185761060d6000826105e1565b6001810190506105fa565b5050565b601f82111561065d5761062e816104fd565b61063784610512565b81016020851015610646578190505b61065a61065285610512565b8301826105f9565b50505b505050565b600082821c905092915050565b600061068060001984600802610662565b1980831691505092915050565b6000610699838361066f565b9150826002028217905092915050565b6106b2826103ae565b67ffffffffffffffff8111156106cb576106ca61046e565b5b6106d582546104cc565b6106e082828561061c565b600060209050601f8311600181146107135760008415610701578287015190505b61070b858261068d565b865550610773565b601f198416610721866104fd565b60005b8281101561074957848901518255600182019150602085019450602081019050610724565b868310156107665784890151610762601f89168261066f565b8355505b6001600288020188555050505b50505050505056fea2646970667358221220295aaa9e4fb19d21dc7bcf767ebe8e131343effb1e33e95489174bec2d220b5e64736f6c63430008130033";

type SimpleStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SimpleStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SimpleStorage__factory extends ContractFactory {
  constructor(...args: SimpleStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      SimpleStorage & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SimpleStorage__factory {
    return super.connect(runner) as SimpleStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SimpleStorageInterface {
    return new Interface(_abi) as SimpleStorageInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SimpleStorage {
    return new Contract(address, _abi, runner) as unknown as SimpleStorage;
  }
}
