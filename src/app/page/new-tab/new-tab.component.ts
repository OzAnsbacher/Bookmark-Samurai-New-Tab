import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-tab',
  templateUrl: './new-tab.component.html',
  styleUrls: ['./new-tab.component.scss']
})
export class NewTabComponent implements OnInit {

  constructor() { }

  nameEdit: string | null = '';
  urlEdit: string | null = '';
  categoryEdit: string | null = '';

  ngOnInit(): void {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    this.nameEdit = urlParams.get('title');
    this.urlEdit = urlParams.get('url');
    this.categoryEdit = urlParams.get('category');
  }

}
