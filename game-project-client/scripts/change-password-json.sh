#!/bin/bash

#curl "http://localhost:3000/change-password/${ID}" \
curl "http://localhost:3000/change-password/$ID" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=$TOKEN"\
  --header "Content-Type: application/json" \
  --data "{
    \"passwords\": {
      \"old\": \"$OLD\",
      \"new\": \"$NEW\"
    }

  }"

# data output from curl doesn't have a trailing newline
echo
