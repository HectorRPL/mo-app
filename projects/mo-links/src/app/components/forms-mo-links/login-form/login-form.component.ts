import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthInterface } from '../../../interfaces/auth-interface';
import { filter, takeUntil, tap } from 'rxjs/operators';
import { GeneralEnum } from '../../../const/general-enum';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {

  // @ts-ignore
  loginForm: FormGroup;
  @Output() emitUser: EventEmitter<AuthInterface> = new EventEmitter();
  @Output() isValidForm: EventEmitter<boolean> = new EventEmitter();
  destroy$ = new Subject();

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    const user: AuthInterface = {
      email: '',
      password: '',
    };
    this.createForm(user);
    this.listenForm();
  }

  createForm(user: AuthInterface): void {
    {
      this.loginForm = this.formBuilder.group({
        'email': new FormControl(user.email, [
          Validators.required,
          Validators.maxLength(32),
          Validators.email,
        ]),
        'password': new FormControl(user.password, [
          Validators.required,
          Validators.maxLength(32),
        ]),
      });
    }
  }

  listenForm(): void {
    this.loginForm.statusChanges
      .pipe(
        tap(x => this.isValidForm.emit(x === GeneralEnum.VALID)),
        filter((status: string) => status === GeneralEnum.VALID),
        takeUntil(this.destroy$),
      )
      .subscribe(
        value => this.emitUser.emit(this.loginForm.value),
        value => console.log(),
      );
  }

}
