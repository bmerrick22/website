import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebook, faSpotify, faUnsplash, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons'; 
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  //Social Media link array
  socialList:any = [];
  //Main text bindings
  followMe:string;
  logoText:string;
  updatesText:string;
  commentsText:string;
  //Icon for Angular version
  toolIcon = faWrench;
  //Path for logo
  logoSource:string = "assets/images/logo-alt.png";

  constructor() { 
    //Build the icons for the social media list
    this.buildIcons();
    //Build the text in the footer
    this.buildText();
  }

  ngOnInit(): void {

  }

  buildIcons(){
   //Create social media icons and their properties
   let instagram = {icon: faInstagram, url: "https://www.instagram.com/benmerrick22/"};
 //  let twitter = {icon: faTwitter, url: "https://github.com/bmerrick22/projects"};
   let facebook = {icon: faFacebook, url: "https://www.facebook.com/ben.merrick.35?ref=bookmarks"};
   let unsplash = {icon: faUnsplash, url: "https://unsplash.com/@bmerrick22"};
   let spotify = {icon: faSpotify, url: "https://open.spotify.com/user/bemur22"};

   //Push them onto the social media array
   this.socialList.push(instagram);
   //this.socialList.push(twitter);
   this.socialList.push(facebook);
   this.socialList.push(unsplash);
   this.socialList.push(spotify);
  }

  buildText(){
    //Create temporary text variables
    let header:string = "follow me.";
    let logo:string = "Desgined and Built by Ben Merrick.";
    let updates:string = "V1.5";
    let comments:string = "This website is updated based on Angular 9.1.11. Currently not mobile friendly";
    //Assign the temps to bound variables
    this.followMe = header;
    this.logoText = logo;
    this.updatesText = updates;
    this.commentsText = comments;
  }

}
