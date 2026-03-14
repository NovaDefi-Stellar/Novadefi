// ============================================================
// NovaDeFi — Contract Addresses & Network Configuration
// ============================================================
//
// HOW TO FILL IN CONTRACT ADDRESSES (for contributors):
//
// 1. Make sure you have Stellar CLI installed:
//    cargo install --locked stellar-cli
//
// 2. Generate a testnet deployer identity:
//    stellar keys generate --global deployer --network testnet
//
// 3. Fund your deployer account on testnet:
//    stellar keys fund deployer --network testnet
//
// 4. Deploy all contracts by running:
//    bash scripts/deploy-all.sh
//
//    OR deploy individually:
//    bash scripts/deploy-lending.sh
//    bash scripts/deploy-amm.sh
//    bash scripts/deploy-dca.sh
//    bash scripts/deploy-staking.sh
//
// 5. The scripts will automatically fill in the addresses below.
//    You can also paste them manually if needed.
// ============================================================

export const NETWORK_PASSPHRASE = "Test SDF Network ; September 2015";
export const RPC_URL = "https://soroban-testnet.stellar.org:443";
export const HORIZON_URL = "https://horizon-testnet.stellar.org";
export const NETWORK = "testnet";

// Contract addresses — filled automatically by deploy scripts
export const CONTRACTS = {
  LENDING: "",   // run: bash scripts/deploy-lending.sh
  AMM: "",       // run: bash scripts/deploy-amm.sh
  DCA: "",       // run: bash scripts/deploy-dca.sh
  STAKING: "",   // run: bash scripts/deploy-staking.sh
};

// Token addresses on testnet
export const TOKENS = {
  XLM: "native",
  USDC: "", // deploy a test USDC token and paste address here
};

// Explorer base URL for linking to transactions
export const EXPLORER_URL = "https://stellar.expert/explorer/testnet";
