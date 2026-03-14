"use client";

import { StellarWalletsKit } from "@creit.tech/stellar-wallets-kit";
import type { ISupportedWallet } from "@creit.tech/stellar-wallets-kit";
import { Networks } from "@creit.tech/stellar-wallets-kit";
import { useWalletStore } from "@/store/wallet";

// Initialize the kit once with desired defaults
StellarWalletsKit.init({
  modules: [],
  network: Networks.TESTNET,
});

export function useWallet() {
  const { address, isConnected, connect, disconnect } = useWalletStore();

  const connectWallet = async () => {
    // Open the built-in auth modal, set the selected wallet and fetch the address
    await StellarWalletsKit.authModal();
    const { address } = await StellarWalletsKit.getAddress();
    if (address) {
      connect(address);
    }
  };

  const disconnectWallet = async () => {
    await StellarWalletsKit.disconnect();
    disconnect();
  };

  return { address, isConnected, connectWallet, disconnectWallet };
}
