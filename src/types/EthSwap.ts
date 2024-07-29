/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface EthSwapInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "buyToken"
      | "owner"
      | "rate"
      | "sellToken"
      | "title"
      | "tokenToSwap"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "TokenPurchased" | "TokenSold"
  ): EventFragment;

  encodeFunctionData(functionFragment: "buyToken", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "rate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sellToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "title", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "tokenToSwap",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "buyToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sellToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "title", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "tokenToSwap",
    data: BytesLike
  ): Result;
}

export namespace TokenPurchasedEvent {
  export type InputTuple = [
    account: AddressLike,
    token: AddressLike,
    amount: BigNumberish,
    rate: BigNumberish
  ];
  export type OutputTuple = [
    account: string,
    token: string,
    amount: bigint,
    rate: bigint
  ];
  export interface OutputObject {
    account: string;
    token: string;
    amount: bigint;
    rate: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokenSoldEvent {
  export type InputTuple = [
    account: AddressLike,
    token: AddressLike,
    amount: BigNumberish,
    rate: BigNumberish
  ];
  export type OutputTuple = [
    account: string,
    token: string,
    amount: bigint,
    rate: bigint
  ];
  export interface OutputObject {
    account: string;
    token: string;
    amount: bigint;
    rate: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface EthSwap extends BaseContract {
  connect(runner?: ContractRunner | null): EthSwap;
  waitForDeployment(): Promise<this>;

  interface: EthSwapInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  buyToken: TypedContractMethod<[], [void], "payable">;

  owner: TypedContractMethod<[], [string], "view">;

  rate: TypedContractMethod<[], [bigint], "view">;

  sellToken: TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;

  title: TypedContractMethod<[], [string], "view">;

  tokenToSwap: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "buyToken"
  ): TypedContractMethod<[], [void], "payable">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "rate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "sellToken"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "title"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "tokenToSwap"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "TokenPurchased"
  ): TypedContractEvent<
    TokenPurchasedEvent.InputTuple,
    TokenPurchasedEvent.OutputTuple,
    TokenPurchasedEvent.OutputObject
  >;
  getEvent(
    key: "TokenSold"
  ): TypedContractEvent<
    TokenSoldEvent.InputTuple,
    TokenSoldEvent.OutputTuple,
    TokenSoldEvent.OutputObject
  >;

  filters: {
    "TokenPurchased(address,address,uint256,uint256)": TypedContractEvent<
      TokenPurchasedEvent.InputTuple,
      TokenPurchasedEvent.OutputTuple,
      TokenPurchasedEvent.OutputObject
    >;
    TokenPurchased: TypedContractEvent<
      TokenPurchasedEvent.InputTuple,
      TokenPurchasedEvent.OutputTuple,
      TokenPurchasedEvent.OutputObject
    >;

    "TokenSold(address,address,uint256,uint256)": TypedContractEvent<
      TokenSoldEvent.InputTuple,
      TokenSoldEvent.OutputTuple,
      TokenSoldEvent.OutputObject
    >;
    TokenSold: TypedContractEvent<
      TokenSoldEvent.InputTuple,
      TokenSoldEvent.OutputTuple,
      TokenSoldEvent.OutputObject
    >;
  };
}