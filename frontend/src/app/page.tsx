export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-6">
      <h1 className="text-5xl font-bold text-white">
        🌌 Welcome to <span className="text-indigo-400">NovaDeFi</span>
      </h1>
      <p className="text-gray-400 text-lg max-w-xl">
        A modular DeFi protocol built on Stellar using Soroban smart contracts.
        Swap tokens, lend assets, automate DCA, and stake — all on-chain.
      </p>
      <div className="flex gap-4 mt-4">
        <a href="/swap" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-medium transition">
          Launch App
        </a>
        <a href="https://github.com/YOUR_USERNAME/novadefi" target="_blank" className="border border-gray-700 hover:border-gray-500 text-gray-300 px-6 py-3 rounded-xl font-medium transition">
          View on GitHub
        </a>
      </div>
    </div>
  );
}
