import { Injectable } from "@angular/core";
import { CacheService } from '../modules/cache.service';

@Injectable()
export class MainControlService {
    constructor(private Cache:CacheService){
        console.log("Main control");
    }
}