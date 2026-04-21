#!/usr/bin/env bash
set -e

FILE="$1"

if [[ -n "$FILE" ]]; then
	tsc "$FILE"
fi

# Compile

# Git steps
git add .
git commit -m "m" || echo "Nothing to commit"

# Push to all remotes
for remote in $(git remote); do
  echo "Pushing to $remote..."
  git push "$remote"
done
