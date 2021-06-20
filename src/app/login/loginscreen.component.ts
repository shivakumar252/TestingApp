import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css'],

})
export class LoginscreenComponent implements OnInit {
  userForm:FormGroup;
  public isVisible: boolean = false;
  token:any;
  _subscriptions = new Subscription();
  loginData:any;
  constructor(private router:Router, private fb: FormBuilder,private toastr: ToastrService,
   private loginService: LoginService  ) {

  }


  ngOnInit(): void {
   this.userForm =  this.fb.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),
        Validators.required, Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$"),
        Validators.required, Validators.pattern(/^(\d{10}|[A-Za-z0-9.]{2,}[@]{1}[a-z]{2,}[.]{1}[a-z]{2,})$/)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),
      ]))
  });
  }
  showVal(eventValue) {

    this.userForm.get("name").setValidators([Validators.required, Validators.pattern("^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$")]);
    this.userForm.get("name").updateValueAndValidity();
  }
  onClickOfLogin(data){
     if(this.userForm.value.name == ""){
      this.toastr.error('Please fill the email Fields');
     }else if(this.userForm.value.password == ""){
      this.toastr.error('Please fill the password Fields');
     }else{
      this.loginData = {
        userId: this.userForm.value.name,
        pw: this.userForm.value.password,

      };
      if (this.loginData != null){
        this._subscriptions.add(this.loginService.login(this.loginData).subscribe((logdata:any)=>{
          this.token = logdata;
          if(this.token!=null){
            this.router.navigate(['/home/homepage']);
            this.toastr.success('Successfully login!');
          }else{
            this.toastr.error('Please fill the Mandatory Fields');
          }

          console.log(this.token);
          }));

      }
     }




  }

}
