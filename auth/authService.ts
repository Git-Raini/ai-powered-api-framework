import { APIRequestContext } from '@playwright/test';

export class AuthService {

    readonly request: APIRequestContext;

    constructor(request: APIRequestContext){

        this.request=request;
    }

    async login(){

        const response =
            await this.request.post(
                'https://reqres.in/api/login',
                {
                    data:{
                        email:'eve.holt@reqres.in',
                        password:'cityslicka'
                    }
                }
            );

        const responseBody =
            await response.json();

        return responseBody.token;
    }

}