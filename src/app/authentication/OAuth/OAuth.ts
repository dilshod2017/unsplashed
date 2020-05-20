import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { SessionControl, Session} from './session';
import { Cache } from 'src/app/service/cache/cache';

@Injectable()
export class OAuth extends SessionControl {
    constructor(http:HttpClient, private cache:Cache){
        super(http);
        console.log("oAuth created");
        let session:Session = {
            username: "string",
            timeStamp: {
                sessionendAt: "string",
                sessionEndAt: "string",
            },
            isAuthenticated: false,
            access_token: "string",
            token_type: "string",
            state:[]
        }
        this.setSession(session);
        this.cache.setSession(this.getSession());
    }
    public setHTTP = this.setHTTP;
    getCache(){
        console.log("Cache created", this.cache.getSession());
    }
    getToken(){
        return "token"
    }
}