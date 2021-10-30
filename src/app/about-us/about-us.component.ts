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

  apiToken = "";
  sendingMail = false;
  mailSended = false;
  ngOnInit(): void {
  }

  onSubmit(contactForm: any) {
    this.sendingMail = true;
    this._api.requestLogin().subscribe((res: any) => {
      console.log(res.data.token);
      this.apiToken = res.data.token;


      this.callSendMail(contactForm);
    });
    // this._api.postMail(contactForm)
  }



  callSendMail(contactForm: any) {
    this._api.sendMail(contactForm, this.apiToken)?.subscribe((res: any) => {
      console.log(res);
      console.log("Mail send sucessfully");
      this.sendingMail = false;
      this.mailSended = true;
      setTimeout(() => {
        this.mailSended = false;
      }, 2500)
    })
    contactForm.reset();

  }

}
