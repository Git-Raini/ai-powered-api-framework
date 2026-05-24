import { test, expect } from '@playwright/test';

import { APIClient } from '../api/apiClient';

test(
'@smoke Verify users API',

async ({ request }) => {

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
    ).toBeGreaterThan(0);

    expect(
        responseBody[0].name
    ).toBeTruthy();

});

