import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthInterface } from '../../../interfaces/auth-interface';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  // @ts-ignore
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    const user: AuthInterface = {
      name: '',
      email: '',
      password: ''
    };
    this.createForm(user);
  }

  createForm(user: AuthInterface): void {
    {
      this.registerForm = this.formBuilder.group({
        'name': new FormControl(user.name, [
          Validators.required,
          Validators.maxLength(32)
        ]),
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
