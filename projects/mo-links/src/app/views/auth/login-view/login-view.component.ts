import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthInterface } from '../../../interfaces/auth-interface';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css'],
})
export class LoginViewComponent implements OnInit {

  // @ts-ignore
  user: AuthInterface
  isInvalid: boolean = true;

  constructor(
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  getUser(user: AuthInterface): void {
    this.user = user;
  }

  getStatusForm(isValid: boolean): void {
    this.isInvalid = !isValid;
  }

  navigateToLinkList(): void {
    this.router.navigate([`/link/list`]).then();
  }

}
