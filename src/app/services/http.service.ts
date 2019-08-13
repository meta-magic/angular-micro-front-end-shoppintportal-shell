import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) {

    }
    restCall(serviceUrl: string, methodType: string, requestJson?: any): Observable<any> {
      debugger;
          const headers = new HttpHeaders().append('Content-Type', 'application/json');
          if (methodType.toLowerCase() === 'post') {
              return this.http.post(serviceUrl, requestJson, {headers});
          } else if (methodType.toLowerCase() === 'get') {
            return this.http.get(serviceUrl, {headers});
          }
      }

}
