#!/usr/bin/env bash
set -e

FILE="$1"

if [[ -z "$FILE" ]]; then
  echo "Usage: $0 <file.ts>"
  exit 1
fi

# Compile
tsc "$FILE"

# Git steps
git add .
git commit -m "m" || echo "Nothing to commit"

# Push to all remotes
for remote in $(git remote); do
  echo "Pushing to $remote..."
  git push "$remote"
done
