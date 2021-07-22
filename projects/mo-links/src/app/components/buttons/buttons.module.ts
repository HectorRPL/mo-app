import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigateToLoginButtonComponent } from './navigate-to-login-button/navigate-to-login-button.component';
import { NavigateToRegisterButtonComponent } from './navigate-to-register-button/navigate-to-register-button.component';
import { PostLinkButtonComponent } from './post-link-button/post-link-button.component';
import { DeleteLinkIconButtonComponent } from './delete-link-icon-button/delete-link-icon-button.component';


@NgModule({
  declarations: [
    NavigateToLoginButtonComponent,
    NavigateToRegisterButtonComponent,
    PostLinkButtonComponent,
    DeleteLinkIconButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ButtonsModule {
}
