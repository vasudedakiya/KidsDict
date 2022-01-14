import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  constructor(private _router: Router) { }


  wid: number = 0;
  ngOnInit(): void {
    setInterval(() => {
      this.wid = window.screen.width;
      if (window.screen.width <= 860) { // 768px portrait
        this._router.navigate(['mobile'])
      }
      else {
        this._router.navigate([""]);
      }
    }, 1000)
  }

}
