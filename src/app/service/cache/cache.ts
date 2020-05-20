import { Injectable } from "@angular/core";
import { SessionControl } from 'src/app/authentication/OAuth/session';
import { HttpClient } from '@angular/common/http';
import { OAuth } from 'src/app/authentication/OAuth/OAuth';


@Injectable()

export class  Cache extends SessionControl{
    constructor(http:HttpClient) {
        super(http);        
    }
    cache:Map<string,string> = new Map();

    dumpCache(){
        this.GET("cache url")
    }
}
