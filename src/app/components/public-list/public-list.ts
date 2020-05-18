import { Component, OnInit } from "@angular/core";
import { CacheService } from 'src/app/service/modules/cache.service';


@Component({
    selector:"public-list",
    templateUrl:"./public-list.html",
    styleUrls:["./public-list.css"]
})

export class PublicList implements OnInit {
    constructor(private cache:CacheService){
        
    }
    ngOnInit(){
        
    }
}