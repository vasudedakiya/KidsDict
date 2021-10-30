import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { }

  playSoud = true;
  wid: number = 0
  mobile = false
  ngOnInit(): void {
    this.playSoud = true;

    setInterval(() => {
      this.wid = window.screen.width;
      if (window.screen.width <= 860) { // 768px portrait
        this.mobile = true;
      }
      else {
        this.playSoud = true;
        this.mobile = false;
      }
    }, 1000)

  }

  goto(level: any) {
    this._router.navigate(['level', level])
  }

  aboutUs() {
    this._router.navigate(['aboutus'])
  }


  w3_open() {
    let temp = document.getElementById("mySidebar")?.style.display;
    let temp1 = document.getElementById("myOverlay")?.style.display;
    temp = "block";
    temp1 = "block";
  }
}
