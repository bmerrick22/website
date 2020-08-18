import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  //Array of projects
  projectList: any = [];
  //Location of inverted image
  skyLineImageInverted: string = "assets/images/skyline-alt.png";
  //Text bindings
  header: string;
  subHeader: string;
  viewMore: string;
  //Github icon
  githubIcon = faGithub;
  //Github URL
  githubUrl: string = "https://github.com/bmerrick22/projects";
  // Element reference
  @ViewChildren("projectBody") firstCard;

  constructor() {
    //Create all my projects
    this.buildProjects();
    //Create text for text bindings
    this.buildText();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.openFirstCard();
  }

  buildProjects() {
    //Create projects objects with names, tags, and description
    let systems_final = {
      name: "SkyNet Systems Programming Final Project",
      tags: ["C", "HTML", "Client/Server", "Sockets"],
      description: `Created a series of C-based programs which worked together to establish a network server platform capable of 
      supporting numerous host connections. The site displayed different text, media, and script files for the user to enjoy.`
    };

    let hci_final = {
      name: "Human Computer Interaction Final Project",
      tags: ["Adobe XD", "User-Oriented"],
      description: `Developed a prototype for a web-application which provided college kids a place to find new recipes and connect
      with others. This was a semester long project which involved numerous user interviews and tests in order to develop our final 
      product using the Adobe XD software.`
    };

    let os_projects = {
      name: 'Operating Systems Projects',
      tags: ["C", "Threads", "Memory", "Scheduling"],
      description: `Generated multiple C-based programs focused on learning the principles of operating systems such as physical 
      and virtual memory, threads and locks, paging and segmentation, and CPU scheduling.`
    };

    let personal_website = {
      name: 'Personal Website',
      tags: ["Angular Framework", "HTML", "CSS", "TypeScript"],
      description: `Designed and built a personal website using the Angular JS framework using predominately self-taught knowledge
      This site is a work in progress as I still have plenty to learn, but it is the first version of a personal project to demonstrate
      my front-end web develpoment skills.`
    };

    let paradigms_project = {
      name: 'Programming Paradigms Senate Candidate Database',
      tags: ["Express Framework", "Pug", "JavaScript", "CSS"],
      description: `Built a web-based application which embraced the Express framework, Node.js, and client and server-side code 
      to provide users with a simple database for the upcoming Senate election candidates.`
    }

    let droid_building = {
      name: "Intro. to Droid Building Wii Gaming Console",
      tags: ["Arduino"],
      description: `Created a series of C-based programs which worked together to establish a network server platform capable of 
      supporting numerous host connections. The site displayed different text, media, and script files for the user to enjoy`
    }

    //Add all projects to the array
    this.projectList.push(systems_final);
    this.projectList.push(hci_final);
    this.projectList.push(os_projects);
    this.projectList.push(personal_website);
    this.projectList.push(paradigms_project);
    // this.projectList.push(droid_building);
  }


  buildText() {
    //Create temporary string variables
    let headText: string = "projects.";
    let subText: string = "Here are some of my projects I have worked on throughout the years. If you have any questions or interest in them, please reach out through the contact page!";
    let more: string = "To view the source code, click the link below to see my personal GitHub page!";
    //Assign text bindings
    this.header = headText;
    this.subHeader = subText;
    this.viewMore = more;
  }

  //In works
  openFirstCard() {
    console.log("Opening first card.");
    this.firstCard.first.nativeElement.classList += "active";
  }

}
