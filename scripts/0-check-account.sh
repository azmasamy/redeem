#!/usr/bin/env bash

# Don'f forget to run these commands in the cli with the proper contract and owner values
# unset $CONTRACT
# unset $OWNER

# export CONTRACT=sub-service.hamzatest.testnet
# export OWNER=hamzatest.testnet

echo "deleting $CONTRACT $OWNER and setting $OWNER as the master account"
echo
near delete $CONTRACT $OWNER

echo "Creating contract"
echo
near create-account "$CONTRACT" --masterAccount "$OWNER" --initialBalance 1
set -e