import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _router: Router) { }

  wid: number = 0
  mobile = false
  aboutus = false
  ngOnInit(): void {

    setInterval(() => {
      this.wid = window.screen.width;
      if (window.screen.width <= 1024) { // 768px portrait
        this.mobile = true;
      }

      else {



        this.mobile = false;
      }
    }, 1000)
  }
  title = 'KidsDict';
}
