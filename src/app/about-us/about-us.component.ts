import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiKidsDictService } from '../api-kids-dict.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private _api: ApiKidsDictService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(contactForm: any) {
    this._api.postMail(contactForm);
    contactForm.reset();
  }


}
