import { tap } from 'rxjs';
import { BookmarkModule } from './../../models/bookmark/bookmark.module';
import { TabService } from './../../service/tab-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'form-tab',
  templateUrl: './form-tab.component.html',
  styleUrls: ['./form-tab.component.scss'],
})
export class FormTabComponent implements OnInit {
  constructor(private fb: FormBuilder, private tabService: TabService) {}

  @Input() nameEdit!: string | null;
  @Input() urlEdit!: string | null;
  @Input() categoryEdit!: string | null;

  profileForm = this.fb.group({
    name: [this.nameEdit, Validators.required],
    url: [this.urlEdit, Validators.required],
    category: [this.categoryEdit],
  });
  newBookmark: boolean = true;
  ngOnInit(): void {
    if (this.nameEdit) {
      this.newBookmark = false;
    }
    this.profileForm = this.fb.group({
      name: [this.nameEdit, Validators.required],
      url: [this.urlEdit, Validators.required],
      category: [this.categoryEdit],
    });
  }

  ngOnChanges() {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    if (!this.profileForm.value.category) {
      this.profileForm.value.category = 'General';
    }
    if (this.newBookmark) {
      this.tabService
        .addBookmark(this.profileForm.value as BookmarkModule )
             
      } else {
        this.tabService.editBookmark(this.profileForm.value as BookmarkModule);
        
    }
  }
  close() {
    window.close();
  }
}
