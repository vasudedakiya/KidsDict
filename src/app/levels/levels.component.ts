import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiKidsDictService } from '../api-kids-dict.service';


@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {
  playSoud = true;
  id: number = 0;
  categorys: any;
  dataLoad = true;
  constructor(private _router: Router, private _activeRoute: ActivatedRoute, private _api: ApiKidsDictService) { }

  ngOnInit(): void {
    this.playSoud = true;
    this.id = this._activeRoute.snapshot.params.id

    this._api.getCategoryList().subscribe((res: any) => {
      console.log(res);
      this.playSoud = true;
      this.categorys = res.data;
      this.dataLoad = false;
    })

  }

  goCate(cat: any) {
    this._router.navigate(['level', this.id, cat])
  }

  goBack() {
    this._router.navigate([''])
  }

  @ViewChild('widgetsContent')
  widgetsContent!: ElementRef;

  scrollLeft() {
    this.widgetsContent.nativeElement.scrollLeft -= 160;
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += 160;
  }

}