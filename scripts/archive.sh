#!/usr/bin/env bash
set -euo pipefail

PORT=${1:-3000}
OUTPUT=${2:-archived-site}

npm run serve -- --port "$PORT" &
SERVER_PID=$!
trap "kill $SERVER_PID 2>/dev/null" EXIT

until wget -q --spider "http://localhost:$PORT" 2>/dev/null; do
  sleep 1
done

wget \
  --recursive \
  --no-verbose \
  --convert-links \
  --adjust-extension \
  --page-requisites \
  --no-host-directories \
  --directory-prefix="$OUTPUT" \
  "http://localhost:$PORT"
