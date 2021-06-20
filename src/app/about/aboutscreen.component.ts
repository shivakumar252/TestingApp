import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstants } from '../common/global-constants';

@Component({
  selector: 'app-aboutscreen',
  templateUrl: './aboutscreen.component.html',
  styleUrls: ['./aboutscreen.component.css']
})
export class AboutscreenComponent implements OnInit {
  title = GlobalConstants.aboutUs;
  aboutUsDescriptions =GlobalConstants.aboutUsDesription;
  contactUs =GlobalConstants.contactUs;
  isPrivate:String;
  isPrivateUser:boolean;
  userName:string;
  constructor(private route:ActivatedRoute,private router:Router) {
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
  }

}
