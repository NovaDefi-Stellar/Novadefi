import { SorobanRpc, Networks } from "@stellar/stellar-sdk";
import { RPC_URL } from "@/constants";

export const rpc = new SorobanRpc.Server(RPC_URL, {
  allowHttp: false,
});

export const networkPassphrase = Networks.TESTNET;
