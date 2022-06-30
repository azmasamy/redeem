#!/usr/bin/env bash
# exit on first error after this point to avoid redeploying with successful build
set -e

echo --------------------------------------------
echo
echo "Creating a service..."
echo
near call  "$CONTRACT" addService '{"title":"Gloria Jeans", "discription":"Free Coffee", "provider":"gloriajeans.testnet", "profitPerRedeem":"0.20", "expiryDate":"2022-07-29T23:50:50.100"}' --accountId="hamzatest.testnet"