export class TokenManager {

    static token='';

    static setToken(token:string){

        this.token=token;
    }

    static getToken(){

        return this.token;
    }

}