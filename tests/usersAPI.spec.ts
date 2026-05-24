import {
    test,
    expect
}
from '@playwright/test';

import {
    APIClient
}
from '../api/apiClient';

import {
    usersSchema
}
from '../schemas/usersSchema';

import {
    validateSchema
}
from '../utils/schemaValidator';

test(
'@api Verify users API schema',

async({request})=>{

const apiClient =
new APIClient(request);

const response =
await apiClient.get(
'https://jsonplaceholder.typicode.com/users'
);

const responseBody =
await response.json();

expect(

validateSchema(
usersSchema,
responseBody
)

).toBeTruthy();

});