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
  constructor() {
    //Assign the text bindings
    this.buildHeaders();
  }

  ngOnInit(): void {}

  buildHeaders(){
    //Create temporary variables with the text
    let text1 = "about me.";
    let text2 = "Computer Science student at Notre Dame interested in Web Development, Cyber Security, and Tech. Consulting.";
    let text3 = `Hi! My name is Ben and I am currently a senior at the University at Notre Dame. This Fall I will be graduating with
    a degree in Computer Science and I am very interested in web development, technology consulting and cyber security. 
    At Notre Dame, I am involved in numerous clubs on campus such as Stuent Interanational Business Council, Hall Government, and Club Lacrosse,
    and I am very active within my resdience hall. For fun, I love to hang out with friends, play sports, take pictures, and be in the moment! 
    I hope you can learn a bit about me from my website. Enjoy!
    `;
    //Assign the temps over to bound variables
    this.textHeader = text1;
    this.textSubHeader = text2;
    this.textParagraph = text3;
  }
}