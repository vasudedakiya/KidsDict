import { Component, OnInit } from '@angular/core';
import { ApiKidsDictService } from '../api-kids-dict.service';

@Component({
  selector: 'app-level3',
  templateUrl: './level3.component.html',
  styleUrls: ['./level3.component.css']
})
export class Level3Component implements OnInit {

  constructor(private _api: ApiKidsDictService) { }

  ngOnInit(): void {
    this._api.getCategoryList().subscribe(
      (res: any) => {
        console.log(res)
      }
    )
  }

}
