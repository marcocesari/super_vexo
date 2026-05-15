#!/bin/bash
set -e

# vite.config.js builds into docs/ (not dist/), so open docs/index.html.
# Opening dist/ here showed a stale build that never updated.
npm run build && open docs/index.html
