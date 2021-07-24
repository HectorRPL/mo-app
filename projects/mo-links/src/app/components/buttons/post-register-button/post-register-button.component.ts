import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthInterface } from '../../../interfaces/auth-interface';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../../../services/auth/auth.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-post-register-button',
  templateUrl: './post-register-button.component.html',
  styleUrls: ['./post-register-button.component.css'],
})
export class PostRegisterButtonComponent implements OnInit {

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
    this.authService.registerUser(user)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(
        (id: string) => this.response.emit(id),
        (error) => console.log(error),
        () => this.loading = false,
      );
  }

}
