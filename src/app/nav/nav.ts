import { Component, OnInit } from "@angular/core";
import { OAuth } from '../authentication/OAuth/OAuth';
 

@Component({
    selector:"nav-bar",
    templateUrl:"./nav.html",
    styleUrls:["./nav.css"]
})
 export class NavBarComponent implements OnInit {
    constructor(private OAuth:OAuth){

     }
     ngOnInit(){
         
     }
    login() {
        // this.mainService.navigateTo("/login")
    }
 }