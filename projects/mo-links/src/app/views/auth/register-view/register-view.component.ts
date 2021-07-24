import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthInterface } from '../../../interfaces/auth-interface';

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.css'],
})
export class RegisterViewComponent implements OnInit {

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

  navigateToLogin(id: string): void {
    this.router.navigate([`/auth/login`]).then();
  }

}
