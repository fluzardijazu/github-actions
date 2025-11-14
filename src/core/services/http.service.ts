import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';
import { Filter } from '../models/filter.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpService {
    protected url = '';
    protected memoryService = {};
    protected memoryTime = 5;
    constructor(public http: HttpClient) {}

    get(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.getObservable(id)
                .pipe(first())
                .subscribe(
                    (data) => {
                        const response = JSON.parse(JSON.stringify(data));
                        resolve(response);
                    },
                    (error) => {
                        reject(error);
                    }
                );
        });
    }

    getObservable(id: string): Observable<any> {
        return this.http.get(environment.apiUrl + this.url + `/${id}`);
    }

    getAll(filter: Filter = new Filter()): Promise<any> {
        return new Promise((resolve, reject) => {
            this.getAllObservable(filter)
                .pipe(first())
                .subscribe(
                    (data) => {
                        const response = JSON.parse(JSON.stringify(data));
                        resolve(response);
                    },
                    (error) => {
                        reject(error);
                    }
                );
        });
    }

    getAllObservable(filter: Filter = new Filter()): Observable<any> {
        const queryString = filter.toQueryString();
        return this.http.get(environment.apiUrl + this.url + `?${queryString}`);
    }

    post(body: Record<string, any>, id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.postObservable(body, id)
                .pipe(first())
                .subscribe(
                    (data) => {
                        const response = JSON.parse(JSON.stringify(data));
                        resolve(response);
                    },
                    (error) => {
                        reject(error);
                    }
                );
        });
    }

    postObservable(body: Record<string, any>, id: string): Observable<any> {
        return this.http.post(environment.apiUrl + this.url + `/${id}`, body, {
            responseType: 'json',
            observe: 'response',
        });
    }

    put(body: Record<string, any>, id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.putObservable(body, id)
                .pipe(first())
                .subscribe(
                    (data) => {
                        const response = JSON.parse(JSON.stringify(data));
                        resolve(response);
                    },
                    (error) => {
                        reject(error);
                    }
                );
        });
    }

    putObservable(body: Record<string, any>, id: string): Observable<any> {
        return this.http.put(environment.apiUrl + this.url + `/${id}`, body, {
            responseType: 'json',
            observe: 'response',
        });
    }

    delete(id: string): Promise<any> {
        return new Promise((resolve, reject) => {
            this.deleteObservable(id)
                .pipe(first())
                .subscribe(
                    (data) => {
                        const response = JSON.parse(JSON.stringify(data));
                        resolve(response);
                    },
                    (error) => {
                        reject(error);
                    }
                );
        });
    }

    deleteObservable(id: string): Observable<any> {
        return this.http.delete(environment.apiUrl + this.url + `/${id}`, {
            responseType: 'json',
            observe: 'response',
        });
    }
}
