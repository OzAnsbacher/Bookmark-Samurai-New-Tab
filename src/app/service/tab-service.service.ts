import { BehaviorSubject, observable } from 'rxjs';
import { BookmarkModule } from './../models/bookmark/bookmark.module';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service.service';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  constructor(private httpService: HttpService) {}
  // constructor(private http:HttpClient, private httpService: HttpService) { }
  // private _categories$ = new BehaviorSubject<CategoriesModule>({});
  // public res$ :new BehaviorSubject<string>({})

  public addBookmark(bookmark: BookmarkModule) {
    return this.httpService.post('bookmark', bookmark).subscribe((res) => {
      console.log(res);
      // window.top?.close();
      window.close()
    });
  }
  public editBookmark(bookmark: BookmarkModule) {
    console.log('edit', bookmark);
    return this.httpService.put('bookmark', bookmark).subscribe((res) => {
      console.log(res);
      // window.top?.close();
      window.close()
    });
  }
}
