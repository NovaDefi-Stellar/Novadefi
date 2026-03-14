#!/bin/bash
set -e

echo "🌌 Deploying all NovaDeFi contracts to Stellar Testnet..."
echo "========================================================="

bash scripts/deploy-lending.sh
bash scripts/deploy-amm.sh
bash scripts/deploy-dca.sh
bash scripts/deploy-staking.sh

echo ""
echo "========================================================="
echo "🎉 All contracts deployed successfully!"
echo ""
echo "📋 Your contract addresses have been saved to:"
echo "   frontend/src/constants/index.ts"
echo ""
echo "�� Next step: cd frontend && npm run dev"
