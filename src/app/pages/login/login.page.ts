import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';
import { OAuth } from 'src/app/authentication/OAuth/OAuth';
import { HttpClient } from '@angular/common/http';
 

@Component({
    selector:"log-in",
    templateUrl: "./login.page.html",
    styleUrls: ["./login.page.css"]
})

export class LoginPage implements OnInit {
    constructor(private Oauth:OAuth, private https:HttpClient){
    }
    public login_formGroup:FormGroup;
    ngOnInit(){
        this.login_formGroup = new FormGroup({
            "username":new FormControl(null),
            "password":new FormControl(null)
        })
        this.Oauth.getCache();
        this.Oauth.GET("https://unsplash.com").subscribe(d=>{
            console.log("dddddd",d);            
        })
    }

 
}