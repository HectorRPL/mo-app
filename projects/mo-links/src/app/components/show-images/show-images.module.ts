import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowLogoComponent } from './show-logo/show-logo.component';
import { ShowUserPhotoComponent } from './show-user-photo/show-user-photo.component';


@NgModule({
  declarations: [
    ShowLogoComponent,
    ShowUserPhotoComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ShowLogoComponent,
    ShowUserPhotoComponent,
  ],
})
export class ShowImagesModule {
}
