import { Injectable } from "@angular/core";
import { SessionControl } from 'src/app/authentication/OAuth/session';
import { HttpClient } from '@angular/common/http';
import { OAuth } from 'src/app/authentication/OAuth/OAuth';
import { environment as env } from "../../../environments/environment"
import { environment as prod } from "../../../environments/environment.prod"

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
