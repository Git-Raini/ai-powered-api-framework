import { test, expect } from '@playwright/test';

import { AuthService } from '../auth/authService';

import { TokenManager } from '../auth/tokenManager';

test(
'@api Verify authentication and request chaining',

async ({ request }) => {

    const authService =
        new AuthService(request);

    const token =
        await authService.login();

    TokenManager.setToken(token);

    expect(
        TokenManager.getToken()
    ).toBeTruthy();

    console.log(
        'Generated Token:',
        TokenManager.getToken()
    );

});