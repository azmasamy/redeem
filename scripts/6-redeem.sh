#!/usr/bin/env bash
# exit on first error after this point to avoid redeploying with successful build
set -e

echo --------------------------------------------
echo
echo "Redeeming a sercice..."
echo
near call  "$CONTRACT" redeem '{"serviceId":"GLORIAJEANS.TESTNET/1656594826181"}' --accountId=htahir.testnet