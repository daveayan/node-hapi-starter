<a href="https://codeclimate.com/github/daveayan/node-hapi-starter">
    <img src="https://codeclimate.com/github/daveayan/node-hapi-starter/badges/gpa.svg" />
</a>
<a href="https://codeclimate.com/github/daveayan/node-hapi-starter">
    <img src="https://codeclimate.com/github/daveayan/node-hapi-starter/badges/issue_count.svg" />
</a>
<a href="https://codeclimate.com/github/daveayan/node-hapi-starter/coverage">
    <img src="https://codeclimate.com/github/daveayan/node-hapi-starter/badges/coverage.svg" />
</a>
[![Build Status](https://travis-ci.org/daveayan/node-hapi-starter.svg?branch=master)](https://travis-ci.org/daveayan/node-hapi-starter)
[![Dependency Status](https://gemnasium.com/badges/github.com/daveayan/node-hapi-starter.svg)](https://gemnasium.com/github.com/daveayan/node-hapi-starter)

# node-hapi-starter

## Tech Stack
- hapijs - a rich framework for building applications and services
- hapi-mrhorse - to create policies like allow access to rest api only if logged in
- hapi-swagger - to generate swagger documentation
- hapi-server-session - for server side session management
- hapi-blipp - to display all available routes on server startup
- hapi-status-monitor - to display server status info, CPU, Memory, Load Average etc

## Running on local
- npm install
- nodemon .

## URL's to use
- Swagger Documentation: http://localhost:3000/documentation
- Status, to see CPU, memory usage etc: http://localhost:3000/status
- GET a user without a secret, will return a 403: http://localhost:3000/user/1
- GET a user with a secret, will return a valid string: http://localhost:3000/user/1?secret=444
- TIP: Try with a different userid: http://localhost:3000/user/4345343244533?secret=444

## Load Tests
- Using Artillery - https://artillery.io/
- npm install artillery -g (note, this is not a dependency in package.json)
- artillery run test/artillery.yml
- artillery report artillery_report_**********.json

## Use PM2
- Using http://pm2.keymetrics.io/
- npm install pm2 -g (note, this is not a dependency in package.json)
- pm2 start ./app/server/server.js -i 2 (Start in cluster mode with 2 servers)
- pm2 scale server 5 (Scale the cluster up to 5 servers)
- pm2 logs (view consolidated logs)
- pm2 monit (monitor all servers)
- pm2 stop all (Stop all servers)
- pm2 delete all (Deletes all servers)
- pm2 flush (Removes all logs)

## Notes
- Status Plugin is good however it crashes when you run a load using artillery. Comment this out in server.js before running artillery