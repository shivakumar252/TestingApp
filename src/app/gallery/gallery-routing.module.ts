import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryscreenComponent } from './galleryscreen.component';

const routes: Routes = [
  {
    path: 'gallerypage',
    component: GalleryscreenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }