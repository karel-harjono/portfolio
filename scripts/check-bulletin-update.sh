#!/bin/bash
set -x

URL="https://www.gracetoronto.ca/bulletin"
NTFY_URL="https://ntfy.sh/gt-jovmbfqob"

# Get this Sunday's date as a Webflow CMS slug (e.g. "april-5")
DAYS_UNTIL_SUNDAY=$(( (7 - $(date +%u) % 7) % 7 ))
SUNDAY_SLUG=$(date -d "+${DAYS_UNTIL_SUNDAY} days" "+%B-%-d" | tr '[:upper:]' '[:lower:]')

echo "Checking $URL for slug '$SUNDAY_SLUG'..."

CONTENT=$(curl -v -A "Mozilla/5.0" "$URL")

echo "--- PAGE CONTENT ---"
echo "$CONTENT"
echo "--- END CONTENT ---"

echo "$CONTENT" | grep -i "bulletin/"

if echo "$CONTENT" | grep -q "bulletin/$SUNDAY_SLUG"; then
  echo "✅ Slug found!"

  curl -s -X POST "$NTFY_URL" \
    -H "Title: Bulletin Update Found" \
    -H "Priority: low" \
    -d "Bulletin slug '$SUNDAY_SLUG' found at $URL"
else
  echo "❌ Slug not found!"

  curl -s -X POST "$NTFY_URL" \
    -H "Title: Bulletin Update NOT Found" \
    -H "Priority: high" \
    -d "Bulletin slug '$SUNDAY_SLUG' NOT found at $URL"

  exit 1
fi
