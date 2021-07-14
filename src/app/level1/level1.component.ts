import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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


  constructor(private _route: Router) {
    this.voices = [];
    this.selectedVoice = null;
    this.selectedRate = .75;
    this.text = [];
    this.word = "";
  }

  // ----------------------------------------------------------


  demo: { name: string, latter: any, url: string }[] = [
    { name: "apple", latter: "apple".split(''), url: "../../assets/images/Alphabets/A.webp" },
    { name: "ball", latter: "ball".split(''), url: "../../assets/images/Alphabets/B.webp" },
    { name: "cat", latter: "cat".split(''), url: "../../assets/images/Alphabets/C.webp" },
    { name: "dog", latter: "dog".split(''), url: "../../assets/images/Alphabets/D.webp" },
  ]

  index: number = 0;
  imgurl: string = ""
  data: { url: string, latter: string }[] = []

  ngOnInit(): void {
    this.displaydata();
    //  ----------------sound---------------
    if (!this.voices.length) {

      speechSynthesis.addEventListener(
        "voiceschanged",
        () => {
          this.voices = speechSynthesis.getVoices();
          this.selectedVoice = (this.voices[2]);
        }
      );
    }

    this.speak();
    // ---------------------------------------
  }

  // ============================display data methods=====================
  goBack() {
    this._route.navigate(['level', 1])
  }

  changeSlid(id: any) {
    this.index = this.index + id;
    this.data = [];
    this.ngOnInit();
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
    this.text = this.demo[this.index].latter;
    this.word = (this.demo[this.index].name);
  }
  // ========================================================================


  // -----------------------sound methods---------------------
  speak() {
    this.selectedVoice = this.voices[2];
    this.stop();
    this.synthesizeSpeechFromText(this.selectedVoice, this.selectedRate, this.text, this.word);
  }

  stop(): void {
    if (speechSynthesis.speaking) {
      speechSynthesis.cancel();
    }
  }

  synthesizeSpeechFromText(voice: SpeechSynthesisVoice, rate: number, text: string[], word: string) {
    for (let i = 0; i < this.demo[this.index].latter.length; i++) {

      var utterance = new SpeechSynthesisUtterance(text[i]);
      utterance.voice = this.selectedVoice;
      utterance.rate = rate;
      speechSynthesis.speak(utterance);

    }
    var utterance = new SpeechSynthesisUtterance(word);
    utterance.voice = this.selectedVoice;
    utterance.rate = rate;
    speechSynthesis.speak(utterance);
  }

  // ----------------------------------------------------
}
