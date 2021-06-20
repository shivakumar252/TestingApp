import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isPrivateUser:boolean 
  visited:boolean;
  bntStyle: string;
  bntStyleForGallery:string;
  bntStyleForAbout:string;
  bntStyleForLogout:string;
//  @Input () msgFromParent:any[];
 @Input() set msgFromParent(msgFromParent: any) {
  if (msgFromParent != undefined) {
    this.isPrivateUser = msgFromParent;
    // console.log("is provider user",this.isPrivateUser);
  }
}
 
  constructor(private router :Router) {
    this. bntStyle = 'btn-default';
    this. bntStyleForAbout = 'btn-default';
    this. bntStyleForGallery = 'btn-default';
    this. bntStyleForLogout = 'btn-default';
   }

  ngOnInit(): void {
  }
  onClickOfAbout(){
    this.bntStyleForAbout = 'btn-change';
    this.router.navigate(['/about/aboutpage'],{ queryParams: { isPrivate: this.isPrivateUser,}, skipLocationChange: true ,
    queryParamsHandling: 'merge' });
  }
  onClickOfGallery(){
    this.bntStyleForGallery = 'btn-change';
    this.router.navigate(['/gallery/gallerypage'],{ queryParams: { isPrivate: this.isPrivateUser,}, skipLocationChange: true ,
    queryParamsHandling: 'merge' });
  }
  onClickOfHome(){
    this.bntStyle = 'btn-change';
    this.router.navigate(['/home/homepage'],{ queryParams: { isPrivate: this.isPrivateUser,}, skipLocationChange: true ,
    queryParamsHandling: 'merge' });
  }
  onClickOfLogout(){
    this.bntStyleForLogout = 'btn-change';
    this.router.navigate(['/login/']);
  }
}
