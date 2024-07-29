/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../common";
import type { EthSwap, EthSwapInterface } from "../EthSwap";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract Token",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "TokenPurchased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "TokenSold",
    type: "event",
  },
  {
    inputs: [],
    name: "buyToken",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rate",
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
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "sellToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "title",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenToSwap",
    outputs: [
      {
        internalType: "contract Token",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526040518060400160405280601881526020017f4574685377617020496e7374616e742045786368616e67650000000000000000815250600190816200004a919062000377565b50606460025560405162001065380380620010658339818101604052810190620000759190620004dc565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200050e565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200017f57607f821691505b60208210810362000195576200019462000137565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001ff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82620001c0565b6200020b8683620001c0565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000258620002526200024c8462000223565b6200022d565b62000223565b9050919050565b6000819050919050565b620002748362000237565b6200028c62000283826200025f565b848454620001cd565b825550505050565b600090565b620002a362000294565b620002b081848462000269565b505050565b5b81811015620002d857620002cc60008262000299565b600181019050620002b6565b5050565b601f8211156200032757620002f1816200019b565b620002fc84620001b0565b810160208510156200030c578190505b620003246200031b85620001b0565b830182620002b5565b50505b505050565b600082821c905092915050565b60006200034c600019846008026200032c565b1980831691505092915050565b600062000367838362000339565b9150826002028217905092915050565b6200038282620000fd565b67ffffffffffffffff8111156200039e576200039d62000108565b5b620003aa825462000166565b620003b7828285620002dc565b600060209050601f831160018114620003ef5760008415620003da578287015190505b620003e6858262000359565b86555062000456565b601f198416620003ff866200019b565b60005b82811015620004295784890151825560018201915060208501945060208101905062000402565b8683101562000449578489015162000445601f89168262000339565b8355505b6001600288020188555050505b505050505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620004908262000463565b9050919050565b6000620004a48262000483565b9050919050565b620004b68162000497565b8114620004c257600080fd5b50565b600081519050620004d681620004ab565b92915050565b600060208284031215620004f557620004f46200045e565b5b60006200050584828501620004c5565b91505092915050565b610b47806200051e6000396000f3fe6080604052600436106100555760003560e01c80632397e4d71461005a5780632c4e722e146100835780634a79d50c146100ae5780638da5cb5b146100d9578063a482171914610104578063d3d35a7c1461010e575b600080fd5b34801561006657600080fd5b50610081600480360381019061007c9190610654565b610139565b005b34801561008f57600080fd5b506100986102bc565b6040516100a59190610690565b60405180910390f35b3480156100ba57600080fd5b506100c36102c2565b6040516100d0919061073b565b60405180910390f35b3480156100e557600080fd5b506100ee610350565b6040516100fb919061079e565b60405180910390f35b61010c610374565b005b34801561011a57600080fd5b50610123610501565b6040516101309190610818565b60405180910390f35b6000600254826101499190610891565b9050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1633846040518463ffffffff1660e01b81526004016101cc939291906108e3565b6020604051808303816000875af11580156101eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020f9190610952565b503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610256573d6000803e3d6000fd5b507fa8a7473f10e62cf9687e243de1c3ac8b3cbc3dd04b96826beb3a65b59538581433600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846002546040516102b0949392919061097f565b60405180910390a15050565b60025481565b600180546102cf906109f3565b80601f01602080910402602001604051908101604052809291908181526020018280546102fb906109f3565b80156103485780601f1061031d57610100808354040283529160200191610348565b820191906000526020600020905b81548152906001019060200180831161032b57829003601f168201915b505050505081565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600254346103849190610a24565b90506103fc6040518060400160405280600a81526020017f5472616e736665723a2000000000000000000000000000000000000000000000815250336040518060400160405280600181526020017f200000000000000000000000000000000000000000000000000000000000000081525084610527565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401610459929190610a66565b6020604051808303816000875af1158015610478573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049c9190610952565b507f8daf503382665d950e449b86172be5222275c90f4ddf69c29fdaa8237a562a6d33600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16836002546040516104f6949392919061097f565b60405180910390a150565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6105c3848484846040516024016105419493929190610a8f565b6040516020818303038152906040527f91d1112e000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506105c9565b50505050565b6105e0816105d86105e3610604565b63ffffffff16565b50565b60006a636f6e736f6c652e6c6f679050600080835160208501845afa505050565b61060f819050919050565b610617610ae2565b565b600080fd5b6000819050919050565b6106318161061e565b811461063c57600080fd5b50565b60008135905061064e81610628565b92915050565b60006020828403121561066a57610669610619565b5b60006106788482850161063f565b91505092915050565b61068a8161061e565b82525050565b60006020820190506106a56000830184610681565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156106e55780820151818401526020810190506106ca565b60008484015250505050565b6000601f19601f8301169050919050565b600061070d826106ab565b61071781856106b6565b93506107278185602086016106c7565b610730816106f1565b840191505092915050565b600060208201905081810360008301526107558184610702565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107888261075d565b9050919050565b6107988161077d565b82525050565b60006020820190506107b3600083018461078f565b92915050565b6000819050919050565b60006107de6107d96107d48461075d565b6107b9565b61075d565b9050919050565b60006107f0826107c3565b9050919050565b6000610802826107e5565b9050919050565b610812816107f7565b82525050565b600060208201905061082d6000830184610809565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061089c8261061e565b91506108a78361061e565b9250826108b7576108b6610833565b5b828204905092915050565b60006108cd8261075d565b9050919050565b6108dd816108c2565b82525050565b60006060820190506108f860008301866108d4565b61090560208301856108d4565b6109126040830184610681565b949350505050565b60008115159050919050565b61092f8161091a565b811461093a57600080fd5b50565b60008151905061094c81610926565b92915050565b60006020828403121561096857610967610619565b5b60006109768482850161093d565b91505092915050565b600060808201905061099460008301876108d4565b6109a160208301866108d4565b6109ae6040830185610681565b6109bb6060830184610681565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610a0b57607f821691505b602082108103610a1e57610a1d6109c4565b5b50919050565b6000610a2f8261061e565b9150610a3a8361061e565b9250828202610a488161061e565b91508282048414831517610a5f57610a5e610862565b5b5092915050565b6000604082019050610a7b60008301856108d4565b610a886020830184610681565b9392505050565b60006080820190508181036000830152610aa98187610702565b9050610ab860208301866108d4565b8181036040830152610aca8185610702565b9050610ad96060830184610681565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052605160045260246000fdfea2646970667358221220e73b6448646d4893c7b2ab3413e95369ee5d3afd5a8b545a8d72cd1b2d6589f064736f6c63430008130033";

type EthSwapConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EthSwapConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EthSwap__factory extends ContractFactory {
  constructor(...args: EthSwapConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _token: AddressLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_token, overrides || {});
  }
  override deploy(
    _token: AddressLike,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(_token, overrides || {}) as Promise<
      EthSwap & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): EthSwap__factory {
    return super.connect(runner) as EthSwap__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EthSwapInterface {
    return new Interface(_abi) as EthSwapInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): EthSwap {
    return new Contract(address, _abi, runner) as unknown as EthSwap;
  }
}
