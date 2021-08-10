import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiKidsDictService } from '../api-kids-dict.service';


@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {

  id: number = 0;
  categorys: any;
  dataLoad = true;
  constructor(private _router: Router, private _activeRoute: ActivatedRoute, private _api: ApiKidsDictService) { }

  ngOnInit(): void {
    this.id = this._activeRoute.snapshot.params.id

    this._api.getCategoryList().subscribe((res: any) => {
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
    this.widgetsContent.nativeElement.scrollLeft -= 180;
  }

  scrollRight() {
    this.widgetsContent.nativeElement.scrollLeft += 180;
  }

}
