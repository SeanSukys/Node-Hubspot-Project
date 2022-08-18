// run `node index.js` in the terminal
const hubspot = require('@hubspot/api-client');
const request = require('request-promise');
const moment = require('moment');
require('dotenv').config();

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const hubspotClient = new hubspot.Client({ accessToken: ACCESS_TOKEN });

async function getContacts() {
  const response = await hubspotClient.apiRequest({
    method: 'GET',
    path: '/crm/v3/objects/contacts',
  });
  const json = await response.json();
  console.log(json);
}

getContacts();
