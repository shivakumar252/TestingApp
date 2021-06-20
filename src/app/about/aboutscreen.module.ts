import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutscreenComponent } from './aboutscreen.component';
import { AboutRoutingModule } from './about-routing.module';
import { HeaderComponent } from '../header/header.component';
import { sharedModule } from '../shared.module';



@NgModule({
  declarations: [AboutscreenComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    sharedModule
  ]
})
export class AboutscreenModule { }
