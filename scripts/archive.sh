#!/bin/bash

# archive-local.sh
# Usage: ./archive-local.sh [PORT] [OUTPUT_DIR]

PORT=${1:-"3000"}
OUTPUT_DIR=${2:-"website-archive"}
CURRENT_DATE=$(date +%Y-%m-%d)
LOG_FILE="wget-log-${CURRENT_DATE}.txt"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Start the local server and wait for it to be ready
npm run serve & 
SERVER_PID=$!
echo "Started server with PID: $SERVER_PID"
echo "Waiting for server to be ready..."
sleep 10

# Archive the local website
wget \
    --mirror \
    --page-requisites \
    --convert-links \
    --wait=1 \
    --no-parent \
    --execute robots=off \
    --reject "*.mp4,*.mp3,*.zip,*.tar,*.gz" \
    --no-clobber \
    --continue \
    --directory-prefix="$OUTPUT_DIR" \
    --output-file="$LOG_FILE" \
    http://localhost:$PORT/

# Create a summary file
echo "Archive Summary" > "$OUTPUT_DIR/archive-summary.txt"
echo "----------------" >> "$OUTPUT_DIR/archive-summary.txt"
echo "Date: $CURRENT_DATE" >> "$OUTPUT_DIR/archive-summary.txt"
echo "Size: $(du -sh $OUTPUT_DIR | cut -f1)" >> "$OUTPUT_DIR/archive-summary.txt"
echo "Files: $(find $OUTPUT_DIR -type f | wc -l)" >> "$OUTPUT_DIR/archive-summary.txt"

# Cleanup: Kill the server process
kill $SERVER_PID

echo "Website archived successfully!"
echo "Archive location: $OUTPUT_DIR"
echo "Log file: $LOG_FILE"
