import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthInterface } from '../../../interfaces/auth-interface';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LinkService } from '../../../services/link/link.service';

@Component({
  selector: 'app-delete-link-icon-button',
  templateUrl: './delete-link-icon-button.component.html',
  styleUrls: ['./delete-link-icon-button.component.css']
})
export class DeleteLinkIconButtonComponent implements OnInit {

  // @ts-ignore
  @Input() idLink: any;
  @Output() response: EventEmitter<AuthInterface> = new EventEmitter();
  destroy$ = new Subject();
  loading: boolean = false;

  constructor(
    private linkService: LinkService
  ) {
  }

  ngOnInit(): void {
  }

  clickHandler(id: string): void {
    this.loading = true;
    this.linkService.deleteLink(id)
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(
        (user: AuthInterface) => this.response.emit(user),
        (error) => console.log(error),
        () => this.loading = false,
      );
  }

}
