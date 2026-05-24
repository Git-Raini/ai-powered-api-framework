import { APIRequestContext, expect } from '@playwright/test';

export class APIClient {

    readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {

        this.request = request;

    }

    async get(endpoint: string) {

        const response = await this.request.get(endpoint);

        expect(response.ok()).toBeTruthy();

        return response;
    }

    async post(
        endpoint: string,
        payload: object
    ) {

        const response = await this.request.post(
            endpoint,
            {
                data: payload
            }
        );

        expect(response.ok()).toBeTruthy();

        return response;
    }

}