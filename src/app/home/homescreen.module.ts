import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomescreenComponent } from './homescreen.component';
import { sharedModule } from '../shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './home.service';



@NgModule({
  declarations: [HomescreenComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    sharedModule,
    HttpClientModule
  ],
  providers:[HomeService]
})
export class HomescreenModule { }
