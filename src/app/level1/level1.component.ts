import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css']
})
export class Level1Component implements OnInit {



  demo: { name: string, latter: any, url: string }[] = [
    { name: "apple", latter: "apple".split(''), url: "../../assets/images/Alphabets/A.webp" },
    { name: "ball", latter: "ball".split(''), url: "../../assets/images/Alphabets/B.webp" },
    { name: "cat", latter: "cat".split(''), url: "../../assets/images/Alphabets/C.webp" },
    { name: "dog", latter: "dog".split(''), url: "../../assets/images/Alphabets/D.webp" },
  ]

  index: number = 0;
  imgurl: string = ""
  data: { url: string, latter: string }[] = []
  constructor(private _route: Router) { }

  ngOnInit(): void {
    this.displaydata();
  }

  goBack() {
    this._route.navigate(['level', 1])
  }

  prev() {
    this.index = this.index - 1;
    this.data = [];
    this.displaydata();
  }

  next() {
    this.index = this.index + 1;
    this.data = [];
    this.displaydata()
  }

  displaydata() {
    for (let i = 0; i < this.demo[this.index].latter.length; i++) {
      let temp = {
        url: "../../assets/images/Spelling_Button/SpelingButton" + (i + 1) + ".webp",
        latter: this.demo[this.index].latter[i],
      }
      this.data.push(temp);
    }
    this.imgurl = this.demo[this.index].url;
  }




}
