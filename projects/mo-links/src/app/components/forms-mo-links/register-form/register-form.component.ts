import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthInterface } from '../../../interfaces/auth-interface';
import { Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, takeUntil, tap } from 'rxjs/operators';
import { GeneralEnum } from '../../../const/general-enum';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {

  // @ts-ignore
  registerForm: FormGroup;
  @Output() emitUser: EventEmitter<AuthInterface> = new EventEmitter();
  @Output() isValidForm: EventEmitter<boolean> = new EventEmitter();
  destroy$ = new Subject();

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.createForm();
    this.listenForm();
  }

  createForm(): void {
    const user: AuthInterface = {
      name: '',
      email: '',
      password: '',
    };

    this.registerForm = this.formBuilder.group({
      'name': new FormControl(user.name, [
        Validators.required,
        Validators.maxLength(32),
      ]),
      'email': new FormControl(user.email, [
        Validators.required,
        Validators.maxLength(32),
        Validators.email
      ]),
      'password': new FormControl(user.password, [
        Validators.required,
        Validators.maxLength(32),
      ]),
    });

  }

  listenForm(): void {
    this.registerForm.statusChanges
      .pipe(
        map(value => value),
        distinctUntilChanged(),
        tap(x => this.isValidForm.emit(x === GeneralEnum.VALID)),
        filter((status: string) => status === GeneralEnum.VALID),
        takeUntil(this.destroy$),
      )
      .subscribe(
        value => this.emitUser.emit(this.registerForm.value),
        value => console.log(),
      );
  }

}
