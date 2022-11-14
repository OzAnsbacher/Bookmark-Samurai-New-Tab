import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { FormTabComponent } from './cmps/form-tab/form-tab.component';
import { NewTabComponent } from './page/new-tab/new-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileEditorComponent,
    FormTabComponent,
    NewTabComponent,
   ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
