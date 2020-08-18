import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'; 


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  //Create text bindings
  introHeader:string;
  introBio:string;
  //Location for me image
  meImage= 'assets/images/opening-image.png'

  constructor() { 
    //Assign text bindings
    this.buildIntro();
  }

  ngOnInit(): void {}

  buildIntro(){
    //Create the temp variables and assign for text bindings
    let text1: string = "Hi, I'm Ben.";
    this.introHeader = text1;
    let text2: string = "Let me introduce myself...";
    this.introBio = text2;
  }

  smoothScroll(){
    //Scroll smoothly when clicking on button
    document.getElementById('about-page').scrollIntoView({behavior: 'smooth'});
  }

}
