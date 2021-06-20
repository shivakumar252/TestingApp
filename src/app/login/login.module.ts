import { NgModule } from '@angular/core';
import { LoginscreenComponent } from './loginscreen.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
const routes: Routes = [
  {
    path: '',
    component: LoginscreenComponent
  }
];

@NgModule({
   declarations: [],
  imports: [RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    LoginService
]
})
export class LoginModule { }
