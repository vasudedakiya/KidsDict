import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  goto(level: any) {
    this._router.navigate(['level', level])
  }

  aboutUs() {
    this._router.navigate(['aboutus'])
  }

}
