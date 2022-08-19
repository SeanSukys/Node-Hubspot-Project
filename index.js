//This lets us store our access token as an environment variable. I am hiding it from GIT for security.
require('dotenv').config();
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
//-------------------------------------------------------------------

//Lets instantiate a new hubspot client utilizing the API Library
const hubspot = require('@hubspot/api-client');
const hubspotClient = new hubspot.Client({ accessToken: ACCESS_TOKEN });

//Test Functions
function sayHello() {
  console.log('Hello!');
}

sayHello();
