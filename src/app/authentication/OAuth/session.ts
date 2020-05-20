import { http } from 'src/app/service/moduels/http.abstract';
import { HttpClient } from '@angular/common/http';

export abstract class SessionControl extends http implements SessionInfo{
    constructor(http:HttpClient) {
        super(http);
        console.log("session Created");
    }    
    session: Session;
    setSession(session: any) {
        this.session = {...session};
    }
    getSession() {
        return {...this.session}
    }
    deleteSession() {
        this.session = undefined;
    }
}
export interface SessionInfo  {
    session:Session
    setSession(session);
    getSession();
    deleteSession();            
}
export interface Session {
    username:string;
    timeStamp:{
        sessionendAt: string;
        sessionEndAt: string;
    };
    isAuthenticated:boolean;
    access_token:string;
    token_type:string;
    state:State[]
}
export interface State {
    timeStamp:string;
    pages:string;
    pageData:string;
}