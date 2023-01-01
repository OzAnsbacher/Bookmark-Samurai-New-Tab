import { User } from './../../models/user/user.moudule';
import { tap } from 'rxjs';
import { BookmarkModule } from './../../models/bookmark/bookmark.module';
import { TabService } from './../../service/tab-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'form-tab',
  templateUrl: './form-tab.component.html',
  styleUrls: ['./form-tab.component.scss'],
})
export class FormTabComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private tabService: TabService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  @Input() nameEdit!: string | null;
  @Input() urlEdit!: string | null;
  @Input() idEdit!: string | null;
  @Input() categoryEdit!: string | null;
  @Input() user!: User;

  newTab: BookmarkModule = {
    name: '',
    url: '',
    _id: '',
    category: '',
  };

  profileForm = this.fb.group({
    name: [this.nameEdit, Validators.required],
    url: [this.urlEdit, Validators.required],
    category: [this.categoryEdit],
  });

  ngOnInit(): void {}

  ngOnChanges() {
    this.profileForm = this.fb.group({
      name: [this.nameEdit, Validators.required],
      url: [this.urlEdit, Validators.required],
      category: [this.categoryEdit],
    });
  }

  onSubmit() {
    if (this.profileForm.value.name && this.profileForm.value.url) {
      this.newTab.name = this.profileForm.value.name;
      this.newTab.url = this.profileForm.value.url;
      this.newTab.category = 'General';
    }
    if (this.profileForm.value.category) {
      this.newTab.category = this.profileForm.value.category;
    }
    if (this.idEdit) {
      this.newTab._id = this.idEdit;
    }

    if (this.user._id) {
      if (!this.newTab._id) {
        this.tabService.addBookmarkUser(
          this.user._id,
          this.newTab as BookmarkModule
        );
      } else {
        this.tabService.editBookmarkUser(
          this.user._id,
          this.newTab as BookmarkModule
        );
      }
    } else {
      if (!this.newTab._id) {
        delete this.newTab._id;
        this.tabService.addBookmark(this.newTab as BookmarkModule);
      } else {
        this.tabService.editBookmark(this.newTab as BookmarkModule);
      }
    }
  }
  close() {
    window.close();
  }

  send() {
    this.tabService.updateBookmark();
  }
}
