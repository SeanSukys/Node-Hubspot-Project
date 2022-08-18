// run `node index.js` in the termina
const hubspot = require('@hubspot/api-client');
const request = require('request-promise');
require('dotenv').config();
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

(async function(){
 const endpoint = 
  try{
    await request({
      method: GET,
      url: `https:api.hubspot.com`,
      qs

    })
  }
catch(e){console.log("This is an error:",e)}


})();
