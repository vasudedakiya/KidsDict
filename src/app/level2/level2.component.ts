import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiKidsDictService } from '../api-kids-dict.service';

@Component({
  selector: 'app-level2',
  templateUrl: './level2.component.html',
  styleUrls: ['./level2.component.css']
})
export class Level2Component implements OnInit {

  constructor(private _route: Router, private _api: ApiKidsDictService, private _activeRoute: ActivatedRoute) { }

  demo: { name: string, latter: any, url: string }[] = []


  index: number = 0;
  imgurl: string = ""
  data: { url: string, latter: string }[] = []
  ansData: { url: string, latter: string }[] = []
  count1: number = 0;
  id: number = 0;
  dataLoad = true;

  ngOnInit(): void {
    this.id = this._activeRoute.snapshot.params.id;

    this._api.getCatData(this.id).subscribe((res: any) => {
      for (let i = 0; i < res.data.length; i++) {
        var temp1 = res.data[i].name;
        var temp = { name: res.data[i].name, latter: temp1.split(''), url: "https://kidsdictionary.arjunbala.com/" + res.data[i].img };
        this.demo.push(temp);
      }
      this.dataLoad = false;
      this.dataS();

    });

    window.addEventListener('keydown', (event: KeyboardEvent) => {
      const keycode = event.keyCode || event.which;
      let temp: string = String.fromCharCode(keycode);
      console.log(keycode);

      if (keycode >= 65 && keycode <= 90) {
        this.appendLatter(temp.toLowerCase());
      }
    });


  }

  dataS() {
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
    this.dataS();
  }

  displaydata() {

    for (let i = 0; i < this.demo[this.index].latter.length; i++) {
      let temp = {
        url: "../../assets/images/Spelling_Button/SpelingButton" + (i + 1) + ".webp",
        latter: this.demo[this.index].latter[i],
      }
      this.data.push(temp);
      let temp1 = {
        url: "", latter: '\xa0\xa0'
      }
      this.ansData.push(temp1)
    }
    this.imgurl = this.demo[this.index].url;
  }

  goHome() {
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
    this.appendLatter(event.target.value);
    event.target.value = "";
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


    else if (this.count1 < this.demo[this.index].latter.length && lat === this.demo[this.index].latter[this.count1].toLocaleLowerCase()) {

      let temp1 = {
        url: "../../assets/images/Spelling_Button/SpelingButton" + (this.count1 + 1) + ".webp",
        latter: this.demo[this.index].latter[this.count1]
      }
      this.ansData[this.count1] = temp1;

      let temp = { url: "", latter: '\xa0\xa0' }
      this.data[this.count1] = temp;
      if (this.count1 + 1 < this.demo[this.index].latter.length) {
        let audio = new Audio();
        audio.src = "../../assets/sound/Sound effect/sound_keyboard_right.ogg";
        audio.load();
        audio.play();
      }
      this.count1 += 1
      if (this.count1 == this.demo[this.index].latter.length) {
        let audio = new Audio();
        audio.src = "../../assets/sound/Sound effect/yuppie.ogg";
        audio.load();
        audio.play();
        if (this.index < this.demo.length - 1) {
          setTimeout(() => {
            this.changeSlid(1);
          }, 500);
        }
        else {
          setTimeout(() => {
            this._route.navigate(['level', 2])
          }, 1000);

        }

      }
    }

    else {
      let audio = new Audio();
      audio.src = "../../assets/sound/Sound effect/sound_keyboard_wrong.ogg";
      audio.load();
      audio.play();
    }

  }

}
