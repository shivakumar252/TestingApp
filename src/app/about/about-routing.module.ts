import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutscreenComponent } from './aboutscreen.component';

const routes: Routes = [
  {
    path: 'aboutpage',
    component: AboutscreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }