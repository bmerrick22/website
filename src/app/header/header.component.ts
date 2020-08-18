import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub, faFacebook, faUnsplash } from '@fortawesome/free-brands-svg-icons'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //List of social media links
  socialMediaList:any = [];
  //List of navigation links
  linkList:any = [];
  //Image location for logo
  logoLocation:string = "assets/images/logo2.png";

  constructor() { 
    //Create and assign navigation links
    this.buildLinks();
    //Create anf assign social media links
    this.buildSocialMedia();
  }

  ngOnInit(): void {
  }

  buildLinks(){
    //Create naivgation objects with a name and a reference
    let about = { name: "about.", ref: "about-page" };
    let projects = { name: "projects.", ref: "projects-page" };
    let contact = { name: "contact.", ref: "contact-page" };
    let photos = { name: "photography.", ref: "photos-page" };
    //Push onto the array 
    this.linkList.push(about);
    this.linkList.push(projects);
    this.linkList.push(photos);
    this.linkList.push(contact);

  }

  buildSocialMedia(){
    //Create social media icons and their properties
    let linkedin = {icon: faLinkedin, url: "https://www.linkedin.com/in/bfmerrick/"};
    let github = {icon: faGithub, url: "https://github.com/bmerrick22/projects"};
    let facebook = {icon: faFacebook, url: "https://www.facebook.com/ben.merrick.35?ref=bookmarks"};
    let unsplash = {icon: faUnsplash, url: "https://unsplash.com/@bmerrick22"};
    let mail = {icon: faEnvelope, url: "mailto:b22merrick@gmail.com"};

    //Push them onto the social media array
    this.socialMediaList.push(linkedin);
    this.socialMediaList.push(github);
    this.socialMediaList.push(facebook);
    this.socialMediaList.push(unsplash);
    this.socialMediaList.push(mail);
  }

  smoothScroll(page:string){
    document.getElementById(page).scrollIntoView({behavior: "smooth"});
  }

}
