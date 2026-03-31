#!/bin/sh
git config filter.b64.clean  ".githooks/encode.sh"
git config filter.b64.smudge ".githooks/decode.sh"
echo "Configured Git b64 filter for this repo."