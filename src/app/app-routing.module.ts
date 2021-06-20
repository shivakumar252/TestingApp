import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './home/homescreen.component';
import { LoginscreenComponent } from './login/loginscreen.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'login',
    loadChildren: ()=>import('./login/login.module').then(m=>m.LoginModule)

  },
  {
    path: 'home',
    loadChildren: () => import('./home/homescreen.module').then(m => m.HomescreenModule)
  },
  {
    path: 'about',
    loadChildren:()=>import('./about/aboutscreen.module').then(m=>m.AboutscreenModule)
  },
  {
    path: 'gallery',
    loadChildren:()=> import('./gallery/gallery.module').then(m=>m.GalleryModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
