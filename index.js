const hubspot = require('@hubspot/api-client');
const hubspotClient = new hubspot.Client({
  accessToken: 'pat-na1-016960fb-4f4b-406d-97e8-5755bf821892',
});

const filter = {
  propertyName: 'createdate',
  operator: 'GTE',
  value: '2021-04-21T18:12:42.678Z',
};
const filterGroup = { filters: [filter] };
const sort = JSON.stringify({
  propertyName: 'createdate',
  direction: 'DESCENDING',
});
const query = 'test';
const properties = ['createdate', 'firstname', 'lastname'];
const limit = 100;
const after = 0;

const publicObjectSearchRequest = {
  limit: '5',
  properties: ['firstname', 'lastname'],
};
async function apiCall() {
  const result = await hubspotClient.crm.contacts.searchApi.doSearch(
    publicObjectSearchRequest
  );
  console.log(JSON.stringify(result));
}

apiCall();
