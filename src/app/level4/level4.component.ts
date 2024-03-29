import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiKidsDictService } from '../api-kids-dict.service';

@Component({
  selector: 'app-level4',
  templateUrl: './level4.component.html',
  styleUrls: ['./level4.component.css']
})
export class Level4Component implements OnInit {

  constructor(private _route: Router, private _api: ApiKidsDictService, private _activeRoute: ActivatedRoute) { }

  demo: { name: string, latter: any, url: string }[] = []


  index: number = 0;
  imgurl: string = ""
  data: { url: string, latter: string }[] = []
  ansData: { url: string, latter: string }[] = []
  count1: number = 0;
  id: number = 0;
  dataLoad = true;
  wid: number = 0;

  ngOnInit(): void {
    this.id = this._activeRoute.snapshot.params.id;


    setInterval(() => {
      this.wid = window.screen.width;
      if (window.screen.width <= 860) { // 768px portrait
        this._route.navigate(['mobile'])
      }
      else {
      }
    }, 1000)

    this._api.getCatData(this.id).subscribe((res: any) => {
      for (let i = 0; i < res.data.length; i++) {
        var temp1 = res.data[i].name;
        var temp = { name: res.data[i].name, latter: temp1.replace(/\s/g, "").split(''), url: "https://kidsdictionary.arjunbala.com/" + res.data[i].img };
        this.demo.push(temp);
        console.log(temp);

      }
      this.dataLoad = false;
      this.dataS();

    });
    window.addEventListener('keydown', (event: KeyboardEvent) => {
      const keycode = event.keyCode || event.which;
      let temp: string = String.fromCharCode(keycode);
      if (keycode == 39 && this.index + 1 != this.demo.length) {
        this.changeSlid(1);
      }
      if (keycode == 37 && this.index > 0) {
        this.changeSlid(-1);
      }
      if (keycode >= 65 && keycode <= 90) {
        this.appendLatter(temp.toLowerCase());
      }
      if (keycode === 8) {
        this.appendLatter("Backspace")
      }
    });

  }

  dataS() {
    this.displaydata();
  }

  removeEventLisntner() {
    window.removeEventListener('keydown', (event: KeyboardEvent) => {
      const keycode = event.keyCode || event.which;
      let temp: string = String.fromCharCode(keycode);
      if (keycode >= 65 && keycode <= 90) {
        this.appendLatter(temp.toLowerCase());
      }
    });
  }

  goBack() {
    this.removeEventLisntner();
    this._route.navigate(['level', 4])
  }

  changeSlid(id: any) {
    this.index = this.index + id;
    this.data = [];
    this.ansData = [];
    this.count1 = 0;
    this.dataS();
  }

  displaydata() {

    for (let i = 0; i < this.demo[this.index].latter.length; i++) {
      let j = 0;
      if (i < 8) {
        j = i
      }
      else {
        j = i - 8
      }
      let temp = {
        url: "././assets/images/Spelling_Button/SpelingButton" + (j + 1) + ".webp",
        latter: this.demo[this.index].latter[i],
      }
      this.data.push(temp);
      let temp1 = { url: "", latter: '\xa0' }
      this.ansData.push(temp1)


    }
    this.imgurl = this.demo[this.index].url;
  }

  goHome() {
    this.removeEventLisntner();
    this._route.navigate([''])
  }

  help() {
    var d: HTMLElement | null = document.getElementById(this.demo[this.index].latter[this.count1].toLocaleLowerCase());

    if (d != null) {
      d?.classList.add('anima');
    }

    setTimeout(() => {
      d?.classList.remove('anima')
    }, 1000);

    this.demo[this.index].latter[this.count1].toLocaleLowerCase()

  }

  onKey(event: any) {

  }

  appendLatter(lat: string) {

    let audioRight = new Audio();
    audioRight.src = "././assets/sound/Sound effect/sound_keyboard_right.ogg";
    audioRight.load();

    let audioYuppy = new Audio();
    audioYuppy.src = "././assets/sound/Sound effect/yuppie.ogg";
    audioYuppy.load();

    let audioWrong = new Audio();
    audioWrong.src = "././assets/sound/Sound effect/sound_keyboard_wrong.ogg";
    audioWrong.load();

    let a = this.demo[this.index].latter.length;
    let b = this.demo[this.index].latter[this.count1].toLocaleLowerCase();

    if (lat === 'Backspace' && this.count1 !== 0) {

      console.log("runn1");


      let j = 0;
      if (this.count1 < 8) {
        j = this.count1
      }
      else {
        j = this.count1 - 8
      }
      let temp1 = {
        url: "././assets/images/Spelling_Button/SpelingButton" + (j) + ".webp",
        latter: this.demo[this.index].latter[this.count1 - 1]
      }
      this.data[this.count1 - 1] = temp1
      let temp = { url: "", latter: '\xa0' }
      this.ansData[this.count1 - 1] = temp;
      this.count1 -= 1
    }

    else if (lat === 'Erasor') {
      console.log("runn1");

      this.changeSlid(0);
    }

    else if (this.count1 < a && lat === b) {
      console.log("run2");
      let c = this.demo[this.index].latter.length;

      let j = 0;
      if (this.count1 < 8) {
        j = this.count1
      }
      else {
        j = this.count1 - 8
      }
      let temp1 = {
        url: "././assets/images/Spelling_Button/SpelingButton" + (j + 1) + ".webp",
        latter: this.demo[this.index].latter[this.count1]
      }
      this.ansData[this.count1] = temp1;

      let temp = { url: "", latter: '\xa0\xa0\xa0' }
      this.data[this.count1] = temp;
      if (this.count1 + 1 < c) {
        // let audio = new Audio();
        // audio.src = "././assets/sound/Sound effect/sound_keyboard_right.ogg";
        // audio.load();
        audioRight.play();
      }
      this.count1 += 1
      if (this.count1 == c) {
        // let audio = new Audio();
        // audio.src = "././assets/sound/Sound effect/yuppie.ogg";
        // audio.load();
        audioYuppy.play();
        if (this.index < this.demo.length - 1) {
          setTimeout(() => {
            this.changeSlid(1);
          }, 500);
        }
        else {
          setTimeout(() => {
            this._route.navigate(['level', 4])
          }, 1000);

        }
      }
    }

    else {
      console.log("rnn3");

      // let audio = new Audio();
      // audio.src = "././assets/sound/Sound effect/sound_keyboard_wrong.ogg";
      // audio.load();
      audioWrong.play();
    }

  }

}
