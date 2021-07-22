import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { NavBarComponent } from "./nav-bar.component";
import { ButtonsModule } from '../buttons/buttons.module';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    ButtonsModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }
