import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthInterface } from '../../../interfaces/auth-interface';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-post-login-button',
  templateUrl: './post-login-button.component.html',
  styleUrls: ['./post-login-button.component.css'],
})
export class PostLoginButtonComponent implements OnInit {

  // @ts-ignore
  @Input() user: AuthInterface;
  @Input() isInvalid: boolean = false;
  @Output() response: EventEmitter<string> = new EventEmitter();
  destroy$ = new Subject();
  loading: boolean = false;

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  clickHandler(user: AuthInterface): void {
    this.loading = true;
    this.authService.loginUser(user)
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.destroy$),
      )
      .subscribe(
        (id: string) => this.response.emit(id),
        (error) => console.log(error),
        () => this.loading = false,
      );
  }

}
