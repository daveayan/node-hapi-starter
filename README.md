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