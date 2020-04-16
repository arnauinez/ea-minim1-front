import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private URL: string;
  private headers: HttpHeaders;

  constructor(private http: HttpClient) { 
    this.URL = 'http://localhost:3700'
    this.setOptions();
    }

  setOptions = () => { 
      this.headers = new HttpHeaders({
        'Content-Type':  'application/json',
        returnType: 'json'
      });
  }

  get = <TResponse>(endpoint: string): Observable<TResponse> =>
    this.http.get<TResponse>(`${this.URL}${endpoint}`, { headers: this.headers });

  // get = (endpoint: string) => {
  //   this.http.get(`${this.URL}${endpoint}`, { headers: this.headers })
  //   .pipe(map(res => { console.log(res); return res })).subscribe();
  // }
  
}
