#!/bin/bash
git pull
# npm install
# npm run build
# pm2 reload ecosystem.config.js --env production
pm2 start dist/index.js
# EOF
