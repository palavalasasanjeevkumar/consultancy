import { Component, OnInit, OnDestroy } from "@angular/core";
import noUiSlider from "nouislider";

@Component({
  selector: "app-index",
  templateUrl: "index.component.html"
})
export class IndexComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  date = new Date();
  pagination = 3;
  pagination1 = 1;
  constructor() {}
  scrollToDownload(element: any) {
    element.scrollIntoView({ behavior: "smooth" });
  }
  // footer
  public imgPath1 = '../assets/img/IELTS.png';
  public imgPath2 = '../assets/img/hotCourse.jpg';
  public imgPath3 = '../assets/img/abroad.jpg';
  // sroll
  public imgPath4 = '../assets/img/London.jpg';
  public imgPath5 = '../assets/img/canada.jpg';
  public imgPath6 = '../assets/img/uk.jpg';
  public imgPath7 = '../assets/img/US.jpg';
  // university
  public imgPath8 = '../assets/img/Centennial-College.jpg';
  public imgPath9 = '../assets/img/tafe.jpg';
  public imgPath10 = '../assets/img/brihmingam.jpg';
  public imgPath11 = '../assets/img/melbourne.jpg';
  public imgPath12 = '../assets/img/myhc-252772.jpg';
  public imgPath13= '../assets/img/La-Trobe-University.jpg';
  public imgPath14 = '../assets/img/deakin-university.jpg';
  public imgPath15 = '../assets/img/RMIT.png';

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("index-page");

    var slider = document.getElementById("sliderRegular");

    noUiSlider.create(slider, {
      start: 40,
      connect: false,
      range: {
        min: 0,
        max: 100
      }
    });

    var slider2 = document.getElementById("sliderDouble");

    noUiSlider.create(slider2, {
      start: [20, 60],
      connect: true,
      range: {
        min: 0,
        max: 100
      }
    });
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("index-page");
  }
}