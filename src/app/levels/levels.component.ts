import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-levels',
  templateUrl: './levels.component.html',
  styleUrls: ['./levels.component.css']
})
export class LevelsComponent implements OnInit {

  id: number = 0;
  constructor(private _router: Router, private _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._activeRoute.snapshot.params.id
  }

  goCate(cat: any) {
    this._router.navigate(['level', this.id, cat])
  }

  goBack() {
    this._router.navigate([''])
  }

}
