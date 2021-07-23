import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigateToLoginButtonComponent } from './navigate-to-login-button/navigate-to-login-button.component';
import { NavigateToRegisterButtonComponent } from './navigate-to-register-button/navigate-to-register-button.component';
import { PostLinkButtonComponent } from './post-link-button/post-link-button.component';
import { DeleteLinkIconButtonComponent } from './delete-link-icon-button/delete-link-icon-button.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { PostRegisterButtonComponent } from './post-register-button/post-register-button.component';
import { PostLoginButtonComponent } from './post-login-button/post-login-button.component';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth/auth.service';
import { LinkService } from '../../services/link/link.service';


@NgModule({
  declarations: [
    NavigateToLoginButtonComponent,
    NavigateToRegisterButtonComponent,
    PostLinkButtonComponent,
    DeleteLinkIconButtonComponent,
    PostRegisterButtonComponent,
    PostLoginButtonComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
  ],
  exports: [
    NavigateToLoginButtonComponent,
    NavigateToRegisterButtonComponent,
    PostLinkButtonComponent,
    DeleteLinkIconButtonComponent,
    PostRegisterButtonComponent,
    PostLoginButtonComponent,
  ],
  providers: [
    AuthService,
    LinkService,
  ]
})
export class ButtonsModule {
}
