import {
test,
expect
}
from '@playwright/test';

import {
APIClient
}
from '../api/apiClient';

test(
'@api Verify complete user workflow',

async({request})=>{

const apiClient =
new APIClient(request);


const createResponse =
await apiClient.post(
'https://jsonplaceholder.typicode.com/users',
{
name:'Raini',
job:'QA'
}
);


const createdUser =
await createResponse.json();

const userId =
createdUser.id;

console.log(
'Created User ID:',
userId
);


expect(
userId
).toBeTruthy();


const getResponse =
await apiClient.get(
`https://jsonplaceholder.typicode.com/users`
);


const users =
await getResponse.json();


expect(
users.length
).toBeGreaterThan(0);


});