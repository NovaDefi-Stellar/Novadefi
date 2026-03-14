"use client";

import { useWallet } from "@/hooks/useWallet";

export default function Navbar() {
  const { address, isConnected, connectWallet, disconnectWallet } = useWallet();

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800 bg-black">
      <div className="flex items-center gap-8">
        <span className="text-white font-bold text-xl">🌌 NovaDeFi</span>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="/swap" className="hover:text-white transition">Swap</a>
          <a href="/lending" className="hover:text-white transition">Lending</a>
          <a href="/dca" className="hover:text-white transition">DCA</a>
          <a href="/staking" className="hover:text-white transition">Staking</a>
        </div>
      </div>
      <button
        onClick={isConnected ? disconnectWallet : connectWallet}
        className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-4 py-2 rounded-lg transition"
      >
        {isConnected
          ? `${address?.slice(0, 6)}...${address?.slice(-4)}`
          : "Connect Wallet"}
      </button>
    </nav>
  );
}
