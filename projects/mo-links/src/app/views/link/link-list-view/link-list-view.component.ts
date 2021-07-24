import { Component, OnInit } from '@angular/core';
import { LinkInterface } from '../../../interfaces/link-interface';

@Component({
  selector: 'app-link-list-view',
  templateUrl: './link-list-view.component.html',
  styleUrls: ['./link-list-view.component.css']
})
export class LinkListViewComponent implements OnInit {

  // @ts-ignore
  link: LinkInterface;
  isInvalid: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  getLink(link: LinkInterface): void {
    this.link = link;
  }

  getStatusForm(isValid: boolean): void {
    this.isInvalid = !isValid;
  }

  refreshLinkList(link: LinkInterface): void {

  }

}
