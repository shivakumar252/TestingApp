import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserCreateService } from './gallery.service';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Users } from '../models/users';
import { GlobalConstants } from '../common/global-constants';
import { CommonUtilityService } from '../common/common-utility.service';

@Component({
  selector: 'app-galleryscreen',
  templateUrl: './galleryscreen.component.html',
  styleUrls: ['./galleryscreen.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class GalleryscreenComponent implements OnInit {
  _subscriptions = new Subscription();
  isPrivate:String;
  isPrivateUser:boolean;
  userName:string;
  userData:any;
  response:any;
  userDataForPatching = new Users();
  gallerySource: any[];
  createUserForm:FormGroup;
  responseAfterPatching :Users;
  userDataForEdit = new Users();
  responseAfterupdating:Users;
  addrelatedTitile= GlobalConstants.addrelatedTitile;
  patchRealtedTitle =GlobalConstants.patchRealtedTitle;
  editRelatedTitle =GlobalConstants.editRelatedTitle;
  addRelatedSubTitle = GlobalConstants.addRelatedSubTitle;
  updateRelatedSubTitle = GlobalConstants.updateRelatedSubTitle;
  constructor(private userService:UserCreateService,private route:ActivatedRoute,private router:Router,
    private fb: FormBuilder,private toastr: ToastrService,private commonUtilityservice:CommonUtilityService ) {
    this.route.queryParams.subscribe((params:any) => {
      if(params){
    this.isPrivate = params.isPrivate;
    this.userName = params.userName;
  if(this.isPrivate=="true"){
   this.isPrivateUser = true;
  }else{
    this.isPrivateUser = false;
  }

   }
  });
  }

  ngOnInit(): void {
    this.createUserForm =  this.fb.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),
      ])),
      job: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),
      ]))
  });
  }

  onClickOfCreateSubmit(userForm){
    if(this.commonUtilityservice.cfn(this.createUserForm.value.name ) && this.commonUtilityservice.cfn(this.createUserForm.value.job) ){
      this.toastr.error('Please fill all the fields');
    }else{
      this.userData = {
        userName: this.createUserForm.value.name,
        job: this.createUserForm.value.job,

      };
      if (this.userData != null){
        this._subscriptions.add(this.userService.createUsers(this.userData).subscribe((userCreatedData:any)=>{
          this.response = userCreatedData;
           console.log(this.response);
          }));
          this.toastr.success('Successfully Created the NewUser!');
          this.createUserForm.reset();
    }
    }

}
onPatchOfUserForm(){
  if(this.commonUtilityservice.cfn(this.createUserForm.value.job )){
    this.toastr.error('Please fill the job fields');
  }else{
    this.userDataForPatching = new Users();
    this.userDataForPatching.job = this.createUserForm.value.job;
  this._subscriptions.add(this.userService.onPatchofusers(this.userDataForPatching).subscribe((data:any)=>{
    this.responseAfterPatching = data;
     console.log(this.responseAfterPatching);
    }));
    this.toastr.success('Successfully Patched with the Newvalue!');
    this.createUserForm.reset();
  }

}

onEditOfUserForm(){
  console.log(this.createUserForm.value.name);
  if(this.commonUtilityservice.cfn(this.createUserForm.value.name ) && this.commonUtilityservice.cfn(this.createUserForm.value.job) ){
    this.toastr.error('Please fill the fields');
  }else{
    this.userDataForEdit = new Users();
    this.userDataForEdit.name = this.createUserForm.value.name;
    this.userDataForEdit.job = this.createUserForm.value.job;
    this._subscriptions.add(this.userService.onUpdateOfUsers(this.userDataForEdit).subscribe((data:any)=>{
      this.responseAfterupdating = data;
       console.log(this.responseAfterupdating);
      }));
      this.toastr.success('Successfully Updated with the Newvalue!');
      this.createUserForm.reset();
  }

}
onClickOfDelete(){
  this._subscriptions.add(this.userService.onDeleteOfusers().subscribe((data:any)=>{
    }));
    this.toastr.success('Successfully Deleted the record!');

}



ngOnDestroy(){
  this._subscriptions.unsubscribe();
}
}
