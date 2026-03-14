#!/bin/bash
set -e

echo "🚀 Building AMM contract..."
stellar contract build --package amm

echo "📦 Deploying AMM contract to testnet..."
AMM_ADDRESS=$(stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/amm.wasm \
  --source deployer \
  --network testnet)

echo "⚙️  Initializing AMM contract..."
stellar contract invoke \
  --id $AMM_ADDRESS \
  --source deployer \
  --network testnet \
  -- initialize \
  --admin $(stellar keys address deployer) \
  --fee_rate 30

echo "💾 Saving address..."
sed -i '' "s/AMM: \"\"/AMM: \"$AMM_ADDRESS\"/" ../frontend/src/constants/index.ts

echo "✅ Done! AMM deployed at: $AMM_ADDRESS"
