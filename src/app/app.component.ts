import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  wid: number = 0
  mobile = false
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
