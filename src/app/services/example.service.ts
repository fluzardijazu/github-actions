import { Injectable } from '@angular/core';
import { HttpService } from 'src/core/services/http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})

export class InventoryService extends HttpService {

    constructor(public override http: HttpClient) {
        super(http);
        this.url = 'example';
    }
    
    public getExample(id:string){
        return this.get(id);
    }

}
