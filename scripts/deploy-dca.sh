#!/bin/bash
set -e

echo "🚀 Building DCA contract..."
stellar contract build --package dca

echo "📦 Deploying DCA contract to testnet..."
DCA_ADDRESS=$(stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/dca.wasm \
  --source deployer \
  --network testnet)

echo "⚙️  Initializing DCA contract..."
stellar contract invoke \
  --id $DCA_ADDRESS \
  --source deployer \
  --network testnet \
  -- initialize \
  --admin $(stellar keys address deployer) \
  --amm_contract $AMM_ADDRESS

echo "💾 Saving address..."
sed -i '' "s/DCA: \"\"/DCA: \"$DCA_ADDRESS\"/" ../frontend/src/constants/index.ts

echo "✅ Done! DCA deployed at: $DCA_ADDRESS"
