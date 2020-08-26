import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  //Text bindings
  photoText1: string;
  photoText2: string;
  //Arrays for the image names
  myImages1: any = [];
  myImages2: any = [];
  //Icon for closing the zoom gallery
  closeIcon = faTimesCircle;
  //Element References to change styles of HTML elements
  @ViewChild("zoom") zoom: ElementRef;
  @ViewChild("closeButton") close: ElementRef;
  @ViewChild("zoomContent") zoomContent: ElementRef;
  //Path for the pic of me holding the camera
  meCameraPic:string = "assets/images/capture-me-2.jpeg";
  //Default image for lazy loading
  default:string = "https://www.publicdomainpictures.net/pictures/300000/velka/agate-grey-color.jpg";

  constructor() {
    //Create the gallery of images
    this.buildGallery();
    //Create the text bindings
    this.buildText();
  }

  ngOnInit(): void {}

  buildGallery() {
    //Create the base string for the location of the folders
    let path: string = "assets/Gallery/Photos/";
    //Total number of images
    let imageCount: number = 37;
    //Base string for the image name
    let name: string = "bmerrick0";
    //loop through and add number to image name string
    for (let idx = 1; idx < imageCount; idx++) {
      //Greate than 10 - remove 0
      if (idx >= 10) {
        name = "bmerrick"
      }
      //Add first half to first array and second half to second array
      if (idx < imageCount / 2) {
        this.myImages1.push(path + name + idx + ".jpeg");
      } else {
        this.myImages2.push(path + name + idx + ".jpeg");
      }
    }

  }

  zoomImage(image) {
    console.log("Opening image: " + image);
    this.zoom.nativeElement.style.display = 'block';
    this.zoomContent.nativeElement.src = image;
  }

  closeImage() {
    this.zoom.nativeElement.style.display = "none";
  }

  buildText() {
    let text1: string = "One thing many people don't know about me is that I love photography. I'm definitely a beginner, but I enjoy taking pictures of nature, landscapes, and close-ups.";
    let text2: string = "If you are interested in one of my photos or simply want to chat, please reach out in the contact section!";
    this.photoText1 = text1;
    this.photoText2 = text2;
  }

}
