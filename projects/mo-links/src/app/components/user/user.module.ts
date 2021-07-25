import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowUserInfoComponent } from './show-user-info/show-user-info.component';
import { ShowImagesModule } from '../show-images/show-images.module';
import { AuthService } from '../../services/auth/auth.service';
import { ShowTextInfoComponent } from './show-text-info/show-text-info.component';


@NgModule({
  declarations: [
    ShowUserInfoComponent,
    ShowTextInfoComponent,
  ],
  imports: [
    CommonModule,
    ShowImagesModule,
  ],
  exports: [
    ShowUserInfoComponent,
  ],
  providers: [
    AuthService,
  ],
})
export class UserModule {
}
