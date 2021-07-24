import { Component, OnInit } from '@angular/core';
import { LinkService } from '../../services/link/link.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LinkInterface } from '../../interfaces/link-interface';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css'],
})
export class LinkListComponent implements OnInit {

  // @ts-ignore
  links: LinkInterface[];
  destroy$ = new Subject();
  loading: boolean = false;

  constructor(
    private linkService: LinkService,
  ) {
  }

  ngOnInit(): void {
    this.getLinks();
  }

  getLinks(): void {
    this.loading = true;
    this.linkService.getLinks()
      .pipe(
        takeUntil(this.destroy$),
      ).subscribe(
      (links: LinkInterface[]) => {
        console.log(links);
        this.links = links
      },
      error => console.log(error),
      () => this.loading = false,
    )
  }

}
