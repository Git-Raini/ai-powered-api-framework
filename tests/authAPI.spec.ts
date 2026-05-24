import {
test,
expect
}
from '@playwright/test';

import {
AuthService
}
from '../auth/authService';

import {
TokenManager
}
from '../auth/tokenManager';

import {
APIClient
}
from '../api/apiClient';

test(
'@api Verify authenticated request flow',

async({request})=>{

const authService =
new AuthService(request);

const token =
await authService.login();

TokenManager.setToken(
token
);

const apiClient =
new APIClient(request);

const response =
await apiClient.get(
'https://jsonplaceholder.typicode.com/users'
);

const responseBody =
await response.json();

expect(
responseBody.length
)
.toBeGreaterThan(0);

console.log(
'Token:',
TokenManager.getToken()
);

});