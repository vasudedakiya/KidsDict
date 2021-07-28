
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiKidsDictService } from '../api-kids-dict.service';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.css']
})
export class Level3Component implements OnInit {

  constructor(private _api: ApiKidsDictService, private _activeRoute: ActivatedRoute, private _route: Router) { }

  id: number = 0
  index: number = 0;
  imgurl: string = ""
  demo: { name: string, url: string }[] = []
  dataLoad = true;
  spellings: {}[] = []

  ngOnInit(): void {
    this.id = this._activeRoute.snapshot.params.id;

    this._api.getCatData(this.id).subscribe((res: any) => {
      for (let i = 0; i < res.data.length; i++) {
        var temp = { name: res.data[i].name, url: "https://kidsdictionary.arjunbala.com/" + res.data[i].img };
        this.demo.push(temp);
      }
      this.dataLoad = false;
      this.dataS();
    });
  }

  dataS() {
    this.spellings.push(this.demo[this.index].name);
    this.makeid(this.demo[this.index].name);
    this.displaydata();
  }

  goBack() {
    this._route.navigate(['level', 3])
  }

  changeSlid(id: any) {
    this.index = this.index + id;
    this.spellings = []
    this.dataS();
  }

  displaydata() {
    this.imgurl = this.demo[this.index].url;
    console.log(this.spellings);
  }

  optioSelect(opt: any) {

    if (this.spellings[opt] === this.demo[this.index].name) {
      var d: HTMLElement | null = document.getElementById('happy')
      d?.classList.add('show');
      let audio = new Audio();
      audio.src = "../../assets/sound/Sound effect/yuppie.ogg";
      audio.load();
      audio.play();
      setTimeout(() => {
        d?.classList.remove('show')
      }, 1300);

      setTimeout(() => {
        this.changeSlid(1);
      }, 1500);


    }

    else {
      var d: HTMLElement | null = document.getElementById('sed')
      d?.classList.add('show');

      let audio = new Audio();
      audio.src = "../../assets/sound/Sound effect/cartoon_girl_oh_no.ogg";
      audio.load();
      audio.play();

      setTimeout(() => {
        d?.classList.remove('show')
      }, 1000);
    }
  }

  makeid(str: string) {
    for (let i = 0; i < 3; i++) {
      var result = '';
      var characters = str;
      var charactersLength = str.length;
      for (var j = 0; j < str.length; j++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      this.spellings.push(result)
    }
    this.spellings = this.spellings.sort(this.rendome)
  }

  rendome() {
    return 0.5 - Math.random()
  }

}
