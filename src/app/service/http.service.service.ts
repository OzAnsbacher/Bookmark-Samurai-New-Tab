import { Observable, observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BookmarkModule } from '../models/bookmark/bookmark.module';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  BASE_URL = '/api/';
  // BASE_URL = '//localhost:3030/api/';
  

  public post(endpoint: string, data: BookmarkModule) {
    const url = this.BASE_URL + endpoint;
    console.log('post', url, data);
    return this.http
      .post(url, data)
      .pipe(tap({ error: (error) => console.log(error) }));
  }

  public put(endpoint: string, data: BookmarkModule) {
    const url = this.BASE_URL + endpoint + '/' + data._id;
    return this.http
      .put(url, data)
      .pipe(tap({ error: (error) => console.log(error) }));
  }

 
}
