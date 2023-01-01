import { BehaviorSubject, observable, Observable, pipe } from 'rxjs';
import { BookmarkModule } from './../models/bookmark/bookmark.module';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service.service';

@Injectable({
  providedIn: 'root',
})
export class TabService {
  constructor(private httpService: HttpService) {}

  public getUser() {
    return this.httpService.getUser('user');
  }

  public addBookmarkUser(id: string, bookmark: BookmarkModule) {
    return this.httpService
      .putUser('user/' + id, bookmark)
      .subscribe((res) => {});
  }
  public addBookmark(bookmark: BookmarkModule) {
    return this.httpService
      .postBookmark('bookmark', bookmark)
      .subscribe((res) => {});
  }
  public editBookmarkUser(id: string, bookmark: BookmarkModule) {
    return this.httpService
      .putUser('user/' + id, bookmark)
      .subscribe((res) => {});
  }
  public editBookmark(bookmark: BookmarkModule) {
    return this.httpService
      .putBookmark('bookmark', bookmark)
      .subscribe((res) => {});
  }
  public updateBookmark(){
    return this.httpService
    .updateBookmark({notification: 'new'})
    .subscribe(() => {});
  }
}
