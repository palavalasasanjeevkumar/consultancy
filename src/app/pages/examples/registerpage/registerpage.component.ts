import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { ServiceService } from '../../../service.service'; 
@Component({
  selector: "app-registerpage",
  templateUrl: "registerpage.component.html"
})
export class RegisterpageComponent implements OnInit, OnDestroy {
  public addFormObj:any;
  public addFormResp:any;
  public name:any;
  public phoneNumber:any;
  public emailid:any;
  public message:any;
  isCollapsed = true;
  focus;
  focus1;
  focus2;
  constructor(private _service: ServiceService) {}
  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e) {
    var squares1 = document.getElementById("square1");
    var squares2 = document.getElementById("square2");
    var squares3 = document.getElementById("square3");
    var squares4 = document.getElementById("square4");
    var squares5 = document.getElementById("square5");
    var squares6 = document.getElementById("square6");
    var squares7 = document.getElementById("square7");
    var squares8 = document.getElementById("square8");

    var posX = e.clientX - window.innerWidth / 2;
    var posY = e.clientY - window.innerWidth / 6;

    squares1.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares2.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares3.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares4.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares5.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares6.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares7.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
    squares8.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
  }

  ngOnInit() {
    // var body = document.getElementsByTagName("body")[0];
    // body.classList.add("register-page");

    // this.onMouseMove(event);
  }
  ngOnDestroy() {
    // var body = document.getElementsByTagName("body")[0];
    // body.classList.remove("register-page");
  }
  saveFormObj(obj){
    console.log('save--?',obj)
 
    let request=
    {
      "name": this.name,
      "phoneNumber": this.phoneNumber,
      "emailid": this.emailid,
      "message": this.message
    }
      console.log("request is::::",request);
       this._service.addRegForm(request).subscribe((res)=>{
        this.addFormResp=res;
        console.log("form data",res);
          //request={};
      })
   
  }
 
}
