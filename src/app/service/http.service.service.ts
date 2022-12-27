import { User } from './../models/user/user.moudule';
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
  // BASE_URL = '//localhost:8000/api/';

  public postBookmark(endpoint: string, data: BookmarkModule) {
    const url = this.BASE_URL + endpoint;
   return this.http.post(url, data, { withCredentials: true }).pipe(
      tap({
        next: () => window.close(),
        error: (error) => {
          console.log(error);
        },
      })
    );
  }
  public putBookmark(endpoint: string, data: BookmarkModule) {
    const url = this.BASE_URL + endpoint+'/'+data._id;
   return this.http.put(url, data, { withCredentials: true }).pipe(
      tap({
        next: () => window.close(),
        error: (error) => {
          console.log(error);
        },
      })
    );
  }

  public putUser(endpoint: string, data: BookmarkModule) {
    const url = this.BASE_URL + endpoint;
    console.log('url', url);
    console.log('data', data);
    
    return this.http.put(url, data, { withCredentials: true }).pipe(
      tap({
        // next: () => window.close(),
        error: (error) => {
          console.log(error);
        },
      })
    );
  }

  public getUser(endpoint: string) {
    const url = this.BASE_URL + endpoint;
    return this.http.get<User>(url, { withCredentials: true }).pipe(
      tap({
        error: (error) => {
          console.log(error);
        },
      })
    );
  }
}
