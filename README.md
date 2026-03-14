# 🌌 NovaDeFi — Modular DeFi Protocol on Soroban

> Built on Stellar. Powered by Soroban. Open for contributors.

NovaDeFi is a fully on-chain, open-source DeFi protocol built on the Stellar 
network using Soroban smart contracts. It brings the core financial primitives 
of modern DeFi — lending, token swapping, automated investing, and staking — 
into a single modular protocol natively on Stellar.

The protocol is designed from the ground up to be contributor-friendly. 
Every module is broken into scoped, well-documented GitHub issues so that 
developers of all levels can pick up real work, ship meaningful code, and 
earn rewards through the Stellar Wave Program on Drips.

Whether you are a Rust/Soroban developer looking to contribute smart contract 
logic, or a TypeScript developer who wants to build the frontend — there is 
a place for you in NovaDeFi.

**Fix. Merge. Earn. 🌊**

---

### 🔭 What we are building

| Module | Description |
|---|---|
| 💰 Lending | Deposit collateral, borrow assets, earn interest |
| 🔄 AMM Swap | Permissionless token swaps via liquidity pools |
| 📈 DCA | Automate recurring token purchases on a schedule |
| 🔐 Staking | Lock tokens and earn protocol rewards over time |
| 🖥️ Frontend | Next.js dashboard connecting it all together |

---
## 📌 Overview

NovaDeFi is a modular DeFi protocol that brings core financial primitives to the Stellar ecosystem. It is fully open source and contribution-friendly — every module has well-scoped GitHub issues for developers of all levels to pick up and earn rewards through the Stellar Wave Program.

The protocol is built with:
- **Rust** + **Soroban SDK** for smart contracts
- **TypeScript / Nextjs** for the frontend dashboard
- **Stellar Testnet** for development & testing

---

## 🧱 Modules

### 1. 💰 Lending & Borrowing (`contracts/lending`)
Users can deposit collateral (XLM / USDC) and borrow against it with an on-chain interest rate model and a liquidation engine for undercollateralized positions.

**Key features:**
- Deposit & withdraw collateral
- Borrow & repay loans
- Dynamic interest rate model
- Liquidation engine
- Price oracle integration

---

### 2. 🔄 AMM / Token Swap (`contracts/amm`)
A constant-product Automated Market Maker (Uniswap v2 style) for permissionless token swaps on Stellar.

**Key features:**
- Liquidity pool creation
- Add / remove liquidity
- Token swap with fee calculation
- Slippage protection
- LP token minting & burning

---

### 3. 📈 DCA Protocol (`contracts/dca`)
Automate recurring token purchases on a fixed schedule (e.g., buy XLM with USDC every week).

**Key features:**
- Create / cancel DCA schedules
- Execute scheduled swaps
- Multi-token pair support
- Pause / resume functionality

---

### 4. 🔐 Staking & Rewards (`contracts/staking`)
Stake tokens and earn protocol rewards distributed proportionally over time.

**Key features:**
- Stake & unstake tokens
- Real-time reward calculation
- Reward distribution per epoch
- Lock period support
- Emergency withdrawal

---

### 5. 🖥️ Frontend Dashboard (`frontend/`)
A React + TypeScript dashboard for interacting with all NovaDeFi contracts using the Freighter wallet.

**Key features:**
- Wallet connect (Freighter)
- Swap interface
- Lending dashboard
- DCA setup page
- Staking page

---

## 🗂️ Project Structure
```
novadefi/
├── contracts/
│   ├── lending/        # Lending & borrowing contract (Rust)
│   ├── amm/            # AMM swap contract (Rust)
│   ├── dca/            # DCA protocol contract (Rust)
│   └── staking/        # Staking & rewards contract (Rust)
├── frontend/           # React + TypeScript dashboard
├── scripts/            # Deploy & interaction scripts
├── environments.toml   # Network config
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Rust + `wasm32-unknown-unknown` target
- Stellar CLI (`cargo install --locked stellar-cli`)
- Node.js v18+

### Clone & Build
```bash
git clone https://github.com/Skinny001/novadefi.git
cd novadefi
stellar contract build
```

### Configure Testnet
```bash
stellar network add \
  --global testnet \
  --rpc-url https://soroban-testnet.stellar.org:443 \
  --network-passphrase "Test SDF Network ; September 2015"

stellar keys generate --global deployer --network testnet
```

---

## 🤝 Contributing

NovaDeFi is part of the **Stellar Wave Program** on [Drips](https://www.drips.network/wave/stellar).
Browse open issues, pick a task, submit a PR, and earn real rewards!

- 📋 Browse issues: [Issues tab](../../issues)
- 📖 Read the guide: [CONTRIBUTING.md](./CONTRIBUTING.md)
- 💬 Join Stellar Discord: https://discord.gg/stellar

### Issue Labels
| Label | Meaning |
|---|---|
| `good first issue` | Beginner friendly |
| `medium` | Requires some contract knowledge |
| `high` | Complex, high reward |
| `frontend` | TypeScript / React tasks |
| `tests` | Writing or improving tests |
| `docs` | Documentation improvements |

---

## 📜 License

MIT License — free to use, fork, and build on.
