import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiKidsDictService } from '../api-kids-dict.service';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css']
})
export class Level1Component implements OnInit {

  // ----------------------sound varibels----------------------

  selectedRate: number;
  selectedVoice: SpeechSynthesisVoice | null;
  text: string[];
  voices: SpeechSynthesisVoice[];
  word: string;
  count = 0;
  id: number = 0;
  dataLoad = true;
  timeouts: NodeJS.Timeout[] = [];


  constructor(private _route: Router, private _activeRoute: ActivatedRoute, private _api: ApiKidsDictService) {
    this.voices = [];
    this.selectedVoice = null;
    this.selectedRate = .75;
    this.text = [];
    this.word = "";
  }

  // ----------------------------------------------------------

  demo: { name: string, latter: any, url: string }[] = []
  index: number = 0;
  imgurl: string = ""
  data: { url: string, latter: string }[] = []


  ngOnInit(): void {
    this.id = this._activeRoute.snapshot.params.id;
    // var message = alert("Warning");
    // document.getElementById('SoundButton')?.click();

    speechSynthesis.addEventListener("voiceschanged",
      () => {
        this.voices = speechSynthesis.getVoices();
        this.selectedVoice = (this.voices[4]);
      }
    );


    this._api.getCatData(this.id).subscribe((res: any) => {
      for (let i = 0; i < res.data.length; i++) {
        var temp1 = res.data[i].name;
        var temp = { name: res.data[i].name, latter: temp1.split(''), url: "https://kidsdictionary.arjunbala.com/" + res.data[i].img }
        this.demo.push(temp);
      }
      this.dataSD();
      this.dataLoad = false;
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

    });

  }

  onKey(event: any) {

  }

  dataSD() {
    this.displaydata();
    // this.speak();
  }

  // ============================display data methods=====================
  goBack() {
    this.stop();
    this._route.navigate(['level', 1])
  }


  changeSlid(id: any) {
    this.timeouts.forEach(e => {
      clearTimeout(e)
    });
    this.timeouts.splice(0, this.timeouts.length);
    this.index = this.index + id;
    this.data = [];
    this.dataSD();
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
      if (temp.latter !== " ") {

        this.data.push(temp);
      }

    }
    this.imgurl = this.demo[this.index].url;
    this.text = this.demo[this.index].latter;
    this.word = (this.demo[this.index].name);
    this.speak();
  }

  playAnima(late: any) {
    var d: HTMLElement | null = document.getElementById("wave" + late + this.count);
    if (d != null) {
      d.classList.add('anima');
    }
  }


  // -----------------------sound methods---------------------
  speak() {
    this.selectedVoice = this.voices[4];
    this.stop();
    this.synthesizeSpeechFromText(this.selectedVoice, this.selectedRate, this.text, this.word);
  }

  stop(): void {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }

  }

  synthesizeSpeechFromText(voice: SpeechSynthesisVoice, rate: number, text: string[], word: string) {
    this.count = 0;




    for (let i = 0; i < this.demo[this.index].latter.length; i++) {
      let id: NodeJS.Timeout;
      var utterance = new SpeechSynthesisUtterance(text[i]);
      utterance.voice = this.selectedVoice;
      utterance.rate = rate;
      speechSynthesis.speak(utterance);
      id = setTimeout(() => {
        this.count++;
        console.log(text[i]);

        this.playAnima(text[i]);
      }, i * 1300);
      this.timeouts.push(id);

    }


    var utterance = new SpeechSynthesisUtterance(word);
    utterance.voice = this.selectedVoice;
    utterance.rate = rate;
    speechSynthesis.speak(utterance);
  }

}
