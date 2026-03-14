#!/bin/bash
set -e

echo "🚀 Building Staking contract..."
stellar contract build --package staking

echo "📦 Deploying Staking contract to testnet..."
STAKING_ADDRESS=$(stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/staking.wasm \
  --source deployer \
  --network testnet)

echo "⚙️  Initializing Staking contract..."
stellar contract invoke \
  --id $STAKING_ADDRESS \
  --source deployer \
  --network testnet \
  -- initialize \
  --admin $(stellar keys address deployer)

echo "💾 Saving address..."
sed -i '' "s/STAKING: \"\"/STAKING: \"$STAKING_ADDRESS\"/" ../frontend/src/constants/index.ts

echo "✅ Done! Staking deployed at: $STAKING_ADDRESS"
