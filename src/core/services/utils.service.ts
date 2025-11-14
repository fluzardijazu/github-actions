import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UtilsService {

    public getGuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(
            c
        ) {
            const r = (Math.random() * 16) | 0,
                v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    public parseError(errors: any): string {
        let response = '';
        Object.keys(errors).forEach((key) => {
            response += key + ': ' + errors[key].join(',') + ' ';
        });
        return response;
    }


    public dataURLtoFile(dataurl: any, filename: string): File {
        const mime = 'image/webp';
        const bstr = atob(dataurl);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    }

    public capitalize(str:string):string {
        const arr = str.split(' ');		
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
		
        }
        const str2 = arr.join(' ');
        return (str2);
    }
	
    public static defaultGuid = '00000000-0000-0000-0000-000000000000';


    public static padTo2Digits(num: number) {
        return num.toString().padStart(2, '0');
    }

    public static formatDate(date: Date) {
        return ([
            date.getFullYear(),
            UtilsService.padTo2Digits(date.getMonth() + 1),
            UtilsService.padTo2Digits(date.getDate()),
        ].join('-') + ' ' +[
            UtilsService.padTo2Digits(date.getHours()),
            UtilsService.padTo2Digits(date.getMinutes()),
            UtilsService.padTo2Digits(date.getSeconds()),
        ].join(':')
        );
    }

    public observableToPromise<T>(obs: Observable<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            obs.subscribe(
                (data) => {
                    resolve(data);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }
}
