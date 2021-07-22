import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LinkFormComponent } from './link-form/link-form.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { InputPasswordComponent } from './components/input-password/input-password.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    LinkFormComponent,
    InputTextComponent,
    InputPasswordComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    LoginFormComponent,
    RegisterFormComponent,
    LinkFormComponent,
  ]
})
export class FormsMoLinksModule {
}
