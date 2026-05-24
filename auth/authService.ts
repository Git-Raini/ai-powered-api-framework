import { APIRequestContext } from '@playwright/test';

export class AuthService {

    readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {

        this.request = request;

    }

    async login() {

        // Simulated token generation
        // In real projects this would come from auth API

        const fakeToken =
            `Bearer-token-${Date.now()}`;

        return fakeToken;

    }

}