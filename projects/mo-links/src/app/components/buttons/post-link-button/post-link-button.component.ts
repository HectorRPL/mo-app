import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LinkService } from '../../../services/link/link.service';
import { LinkInterface } from '../../../interfaces/link-interface';

@Component({
  selector: 'app-post-link-button',
  templateUrl: './post-link-button.component.html',
  styleUrls: ['./post-link-button.component.css'],
})
export class PostLinkButtonComponent implements OnInit {

  // @ts-ignore
  @Input() link: LinkInterface;
  @Output() response: EventEmitter<LinkInterface> = new EventEmitter();
  destroy$ = new Subject();
  loading: boolean = false;

  constructor(
    private linkService: LinkService,
  ) {
  }

  ngOnInit(): void {
  }

  clickHandler(link: LinkInterface): void {
    this.loading = true;
    this.linkService.postNewLink(link)
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (link: LinkInterface) => this.response.emit(link),
        (error) => console.log(error),
        () => this.loading = false,
      );
  }

}
