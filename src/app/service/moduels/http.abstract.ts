import { HttpClient } from '@angular/common/http';

export abstract class http {
    private http:HttpClient;
    constructor(http:HttpClient){
        console.log("http created");
        this.http = http;
        
    }
    GET(url, options=null){
        return (options === null)? this.http.get(url):this.http.get(url,options);
    }
    POST(url, body, options=null){
        return (options===null)?this.http.post(url,body):this.http.post(url,body,options);
    }
    setHTTP(http){
        this.setHTTP = http;
    }
}