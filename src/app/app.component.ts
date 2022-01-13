import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _router: Router, private _activeRoute: ActivatedRoute) { }

  wid: number = 0
  url: any;
  mobile = false
  aboutUs = false
  ngOnInit(): void {


    setInterval(() => {
      this.url = this._router.url;
      if (this.url === '/aboutus') {
        this.aboutUs = true;
      }
      else {
        this.aboutUs = false;
      }
      this.wid = window.screen.width;
      if (window.screen.width <= 860) { // 768px portrait
        this.mobile = true;
      }
      else {
        this.mobile = false;
      }
    }, 1000)


  }
  title = 'KidsDict';
}

