import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import {environment} from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<string>;
    public currentUser: Observable<string>;
    isAdmin = false;
    error = '';
    private jwtHelper: JwtHelperService;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<string>(
            localStorage.getItem('currentUser') ?? ''
        );
        this.currentUser = this.currentUserSubject.asObservable();
        this.jwtHelper = new JwtHelperService();
    }

    public get currentUserValue(): string {
        return this.currentUserSubject.value;
    }

    /**
	 * Performs the auth
	 * @param email email of user
	 * @param password password of user
	 */
    login(email: string, password: string) {
        return this.http
            .post<any>(`${environment.apiUrl}users/authenticate`, {
                email,
                password,
            })
            .pipe(
                map((response) => {
                    const data = JSON.parse(JSON.stringify(response));
                    if (data.code == 200) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem(
                            'currentUser',
                            JSON.stringify(data.data)
                        );
                        this.currentUserSubject.next(data.data);
                    }
                    return response;
                })
            );
    }

    logout(){
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        this.currentUserSubject.next('');
    }

    public getToken(): string {
        return localStorage.getItem('token') ?? '';
    }

    public isAuthenticated(): boolean {
        const currentUser = this.currentUserValue;
        if (currentUser) {
            // Check whether the token is expired and return
            // true or false
            return !this.jwtHelper.isTokenExpired(currentUser);
        }

        return false;
    }


}
