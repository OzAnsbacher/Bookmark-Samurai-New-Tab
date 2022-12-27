import { BookmarkModule } from "../bookmark/bookmark.module";

export interface User {
    _id?: string
    username?:string
    bookmarks?:BookmarkModule[]
  }