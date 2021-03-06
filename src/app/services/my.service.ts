import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class myService {
  private readonly _url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  getData():Observable<any[]> {
    return this.http.get<any[]>(this._url, {});
  }
}
