import { User } from './../../models/user/user.moudule';
import { TabService } from './../../service/tab-service.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'new-tab',
  templateUrl: './new-tab.component.html',
  styleUrls: ['./new-tab.component.scss'],
})
export class NewTabComponent implements OnInit, OnChanges {
  constructor(private route: ActivatedRoute, private tabService: TabService) {}

  nameEdit: string | null = '';
  urlEdit: string | null = '';
  categoryEdit: string | null = '';
  idEdit: string | null = '';
  user: User = {};

  ngOnInit(): void {
    this.tabService.getUser().subscribe((user) => {
      this.user = user;
    });

    this.route.queryParams.subscribe((params) => {
      this.nameEdit = params['title'];
      this.urlEdit = params['url'];
      this.categoryEdit = params['category'];
      this.idEdit = params['id'];
    });
  }

  ngOnChanges(): void {}
}
