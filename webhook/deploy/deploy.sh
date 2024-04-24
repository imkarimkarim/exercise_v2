#!/bin/bash

# kill prev process
ps -ef | grep 'front44.*npm start' | awk '{print $2}' | head -n 1 | xargs kill
ps -ef | grep 'front44.*next-server' | awk '{print $2}' | head -n 1 | xargs kill

cd /ec/front/dev/green/

# getting latest updated
git restore .
git pull origin dev

# building and running for staging(test)
npm i
npm run build:staging
npm start &
