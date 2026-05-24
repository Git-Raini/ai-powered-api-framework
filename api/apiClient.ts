import {
    APIRequestContext,
    expect
}
from '@playwright/test';

import {
    TokenManager
}
from '../auth/tokenManager';

export class APIClient {

    readonly request: APIRequestContext;

    constructor(
        request: APIRequestContext
    ) {

        this.request = request;

    }

    async get(
        endpoint: string
    ) {

        const response =
            await this.request.get(
                endpoint,
                {
                    headers: {

                        Authorization:
                        TokenManager.getToken()

                    }
                }
            );

        expect(
            response.ok()
        ).toBeTruthy();

        return response;

    }

    async post(
        endpoint: string,
        payload: object
    ) {

        const response =
            await this.request.post(
                endpoint,
                {
                    headers: {

                        Authorization:
                        TokenManager.getToken()

                    },

                    data: payload

                }
            );

            

        expect(
            response.ok()
        ).toBeTruthy();

        return response;

    }
async put(
    endpoint: string,
    payload: object
){

    const response =
        await this.request.put(
            endpoint,
            {
                headers:{
                    Authorization:
                    TokenManager.getToken()
                },

                data: payload
            }
        );

    expect(
        response.ok()
    ).toBeTruthy();

    return response;

}


async delete(
    endpoint:string
){

    const response =
        await this.request.delete(
            endpoint,
            {
                headers:{
                    Authorization:
                    TokenManager.getToken()
                }
            }
        );

    expect(
        response.ok()
    ).toBeTruthy();

    return response;

}
}