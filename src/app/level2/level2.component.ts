import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component implements OnInit {

  constructor(private _route: Router) { }

  demo: { name: string, latter: any, url: string }[] = [
    { name: "apple", latter: "apple".split(''), url: "../../assets/images/Alphabets/A.webp" },
    { name: "ball", latter: "ball".split(''), url: "../../assets/images/Alphabets/B.webp" },
    { name: "cat", latter: "cat".split(''), url: "../../assets/images/Alphabets/C.webp" },
    { name: "dog", latter: "dog".split(''), url: "../../assets/images/Alphabets/D.webp" },
  ]


  index: number = 0;
  imgurl: string = ""
  data: { url: string, latter: string }[] = []
  ansData: { url: string, latter: string }[] = []
  count1: number = 0;

  ngOnInit(): void {
    this.displaydata();
  }

  goBack() {
    this._route.navigate(['level', 2])
  }

  changeSlid(id: any) {
    this.index = this.index + id;
    this.data = [];
    this.ansData = [];
    this.count1 = 0;
    this.ngOnInit();
  }

  displaydata() {
    for (let i = 0; i < this.demo[this.index].latter.length; i++) {
      let temp = {
        url: "../../assets/images/Spelling_Button/SpelingButton" + (i + 1) + ".webp",
        latter: this.demo[this.index].latter[i],
      }
      this.data.push(temp);
      let temp1 = { url: "", latter: '\xa0\xa0' }
      this.ansData.push(temp1)
    }
    this.imgurl = this.demo[this.index].url;
  }

  appendLatter(lat: string) {
    if (lat === 'Backspace' && this.count1 !== 0) {
      let temp1 = {
        url: "../../assets/images/Spelling_Button/SpelingButton" + (this.count1) + ".webp",
        latter: this.demo[this.index].latter[this.count1 - 1]
      }
      this.data[this.count1 - 1] = temp1
      let temp = { url: "", latter: '\xa0\xa0' }
      this.ansData[this.count1 - 1] = temp;
      this.count1 -= 1
    }

    else if (lat === 'Erasor') {
      this.changeSlid(0);
    }


    else if (this.count1 < this.demo[this.index].latter.length && lat === this.demo[this.index].latter[this.count1]) {
      let temp1 = {
        url: "../../assets/images/Spelling_Button/SpelingButton" + (this.count1 + 1) + ".webp",
        latter: lat
      }
      this.ansData[this.count1] = temp1;

      let temp = { url: "", latter: '\xa0\xa0' }
      this.data[this.count1] = temp;

      this.count1 += 1
      if (this.count1 == this.demo[this.index].latter.length) {
        setTimeout(() => {
          this.changeSlid(1);
        }, 500);
      }
    }

  }

}
