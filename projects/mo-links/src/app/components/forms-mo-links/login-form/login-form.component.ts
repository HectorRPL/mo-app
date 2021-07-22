import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthInterface } from '../../../interfaces/auth-interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  // @ts-ignore
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    const user: AuthInterface = {
      email: '',
      password: ''
    };
    this.createForm(user);
  }

  createForm(user: AuthInterface): void {
    {
      this.loginForm = this.formBuilder.group({
        'email': new FormControl(user.email, [
          Validators.required,
          Validators.maxLength(32),
          Validators.email
        ]),
        'password': new FormControl(user.password, [
          Validators.required,
          Validators.maxLength(32)
        ]),
      });
    }

  }
}
