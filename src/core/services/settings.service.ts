import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class SettingsService extends HttpService {
    constructor(public override http: HttpClient) {
        super(http);
        this.url = 'Settings/';
    }
}
