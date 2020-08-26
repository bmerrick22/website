import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  //About me text bindings
  textHeader:string;
  textSubHeader:string;
  textParagraph:string;
  //Skyline image for bottom of page
  skyLineImage:string = "assets/images/skyline.png";
  //Image of me
  meImage:string = "assets/images/meForest.jpeg";
  //Default image for lazy loading
  default:string = "https://www.publicdomainpictures.net/pictures/300000/velka/agate-grey-color.jpg";
  
  constructor() {
    //Assign the text bindings
    this.buildHeaders();
  }

  ngOnInit(): void {}

  buildHeaders(){
    //Create temporary variables with the text
    let text1 = "about me.";
    let text2 = "Computer Science student at Notre Dame interested in Web Development, Tech. Consulting, and Cyber Security.";
    let text3 = `Hi! My name is Ben and I am a senior at the University at Notre Dame. I will be graduating in Spring 2021 with a degree in Computer Science 
    and I am very interested in web development, technology consulting, and cyber security.
    At Notre Dame I am involved in clubs and student leadership including the Student International Business Council, Club Lacrosse, and serving as Hall Vice President.
     For fun, I love to hang out with friends, play sports, take pictures, and be in the moment! 
    I hope you can learn a bit about me from my website. Enjoy!
    `;
    //Assign the temps over to bound variables
    this.textHeader = text1;
    this.textSubHeader = text2;
    this.textParagraph = text3;
  }
}
