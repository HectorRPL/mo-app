import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserInterface } from '../../../interfaces/user-interface';

@Component({
  selector: 'app-show-user-info',
  templateUrl: './show-user-info.component.html',
  styleUrls: ['./show-user-info.component.css'],
})
export class ShowUserInfoComponent implements OnInit {

  // @ts-ignore
  user: UserInterface;
  @Input() userId: string = '1'; // TODO => hardcode
  destroy$ = new Subject();
  loading: boolean = false;

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this.getUserInfo(this.userId);
  }

  getUserInfo(userId: string): void {
    this.loading = true;
    this.authService.getUser(userId)
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(
        (user: UserInterface) => this.user = user,
        error => console.log(error),
        () => this.loading = false,
      );
  }

}
