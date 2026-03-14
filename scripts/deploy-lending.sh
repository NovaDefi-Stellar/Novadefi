#!/bin/bash
set -e

echo "🚀 Building Lending contract..."
stellar contract build --package lending

echo "📦 Deploying Lending contract to testnet..."
LENDING_ADDRESS=$(stellar contract deploy \
  --wasm target/wasm32-unknown-unknown/release/lending.wasm \
  --source deployer \
  --network testnet)

echo "✅ Lending contract deployed at: $LENDING_ADDRESS"

echo "⚙️  Initializing Lending contract..."
stellar contract invoke \
  --id $LENDING_ADDRESS \
  --source deployer \
  --network testnet \
  -- initialize \
  --admin $(stellar keys address deployer)

echo "💾 Saving address..."
sed -i '' "s/LENDING: \"\"/LENDING: \"$LENDING_ADDRESS\"/" ../frontend/src/constants/index.ts

echo "✅ Done! Lending deployed at: $LENDING_ADDRESS"
