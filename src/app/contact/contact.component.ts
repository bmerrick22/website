import { Component, OnInit } from '@angular/core';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  //Text bindings
  textHeader: string;
  textSubheader: string;
  //Array of contact method objects
  contactMethods: any = [];
  resumePath:string = "../../assets/documents/bm_resume.pdf";

  constructor() {
    //Assign the text bindings
    this.buildText();
    //Create contact methods
    this.buildContactMethods();
  }

  ngOnInit(): void {}

  buildText() {
    //Create temp strings
    let head: string = "contact.";
    let sub: string = "Let's chat! I would love to connect with you and am available through the following platforms. Please reach out if you have any questions!";
    //Assign temps to bound variables
    this.textHeader = head;
    this.textSubheader = sub;
  }

  buildContactMethods() {
    //Create contact objects with text and font-awesome icon
    let email = { form: "bmerrick@nd.edu", icon: faEnvelope };
    let phone = { form: "201-315-6811", icon: faPhone };
    let linkedin = { form: "Ben Merrick", icon: faLinkedin };
    //Push objects onto contact array
    this.contactMethods.push(email);
    this.contactMethods.push(phone);
    this.contactMethods.push(linkedin);
  }

}
