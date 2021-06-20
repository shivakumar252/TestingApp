import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstants } from '../common/global-constants';
import { HomeService } from './home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class HomescreenComponent implements OnInit {
  _subscriptions = new Subscription();
  isPrivate:String;
  isPrivateUser:boolean;
  userName:string;
  page = 1;
  userList:any;
  homeScreenTitle = GlobalConstants.homePageFirstSectionTitle;
  homeScreenSecondTitle = GlobalConstants.homePageSecondSectionTitle;
  firstDescription = GlobalConstants.homePageDescriptionFirst;
  secondDescription = GlobalConstants.homePageDescriptionSecond;
  thirdDesription = GlobalConstants.homePageDescriptionThird;
  fourthDescription = GlobalConstants.homePageDescriptionForth;
  fifthDescription = GlobalConstants.homePageDescriptionFifth;
  sixthDescription = GlobalConstants.homePageDescriptionSixth;
  seventhDescription = GlobalConstants.homePageDescriptionSeventh;
  constructor(private route:ActivatedRoute,private router:Router,private userSevice:HomeService) {
    this.route.queryParams.subscribe((params:any) => {
      if(params){
    this.isPrivate = params.isPrivate;
    this.userName = params.userName;
    if(this.isPrivate == "true"){
      this.isPrivateUser = true;

    }else{
      this.isPrivateUser = false;

    }

   }
  });
}

  ngOnInit(): void {
    this.getUsersList();
  }


  onClickOfAbout(){
    this.router.navigate(['/about/aboutpage']);
  }
  onClickOfGallery(){
    this.router.navigate(['/gallery/gallerypage']);
  }
getUsersList(){
  var page =this.page;
  this._subscriptions.add(this.userSevice.getUser(this.page).subscribe((userData:any)=>{
    this.userList = userData.data;

    console.log(this.userList);
    }));
}
ngOnDestroy(){
  this._subscriptions.unsubscribe();
}
}
