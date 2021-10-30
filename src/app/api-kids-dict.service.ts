import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';



@Injectable({
  providedIn: 'root'
})
export class ApiKidsDictService {

  apiUrlCate = "https://kidsdictionary.arjunbala.com/api/categories";

  apiUrlCateData = "https://kidsdictionary.arjunbala.com/api/categorywisespellings/";

  bearerToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZGU3NTViYjYzZWI3MDQ5NGZjNTBlMThlYmFkOWVjZmIwZjVjYmNmNWY2ZmUwODg5MWIwMmYxZmIyY2QyNjI5MzU1ZTJkY2VhMzY2Y2FlODAiLCJpYXQiOjE2MjU0NjM4NDYsIm5iZiI6MTYyNTQ2Mzg0NiwiZXhwIjoxNjU2OTk5ODQ2LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.zvTGyk_RPZ-Yi31vdw0T3z2t7mndZFx2gDGW7zKnuN_sVIBpeIQjY3TaEB4_3QUugNUUYbIoWRB_16d99F_NSIlh0eGtWNjdE9PL0M8f2mIw8M9KiJN0FXyL_UVtcm7fTaP0Hd4MHuDBlM8jaR_lixnHeM6D5JZqiOHE5i2XCIFx_sOSd_bsWElmQEOEAJoOGBw132D8KlD7txufYFPjvPevL7gHGOcP_n0fG__l-KOQPeolVQ6dRchL3vwMwQcnzEsAmaJ3lyBGwv3WLqEt4fp_-fBkPDsLWhaXbHYlzR1FZAJtZFGkm4zv62MRUVWFlwBkPPpHiUSCdjYzZm1z1qDcKWKe-Si3bJQOktiPZq5JvM7vQjiLSNu-nG-VZXnQ-RBVA9ZXfeTNqG0VQmvctQGii90vBgaFueiPVZc_jFyAhty1mWTB2s5URafD8qgm428ZW2H6jirHpwdXyFF2bWTztaXV_SlfoGOASNU_9_zfdY56dAHAB_ohIiqSZxtrV_UQLciUVOIB-yFu9J2aLh0BC8lRhPhxemfUpY-bQsf5SHICN2yKXFgvfbwx3wMOILaB61CLABGUZPuQJrCFbB_vjbdhyeW4xd9eIVN9zo3EGKLqLOVcZg02APuH02-TGxMazkk4A61UlwtxzY-ZL9ieHngxfa1W4aRqRi0zl3o"

  constructor(private _http: HttpClient) { }

  getCategoryList() {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.bearerToken
    });

    const httpOptions = {
      headers: headers_object
    };

    return this._http.get(this.apiUrlCate, httpOptions)
  }

  getCatData(id: any) {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + this.bearerToken
    });

    const httpOptions = {
      headers: headers_object
    };

    return this._http.get(this.apiUrlCateData + id, httpOptions)
  }

  // -----------------------------------------------------------------------

  recierEmail = "vasudedakiya3@gmail.com";
  LoginApi = "http://emailapi.arjunbala.com/api/login";
  mailSendApi = "http://emailapi.arjunbala.com/api/sendemail";
  loginToken: [] = [];

  requestLogin() {
    let temp = { email: "190540107043@darshan.ac.in", password: "11222117" };
    return this._http.post(this.LoginApi, { email: temp.email, password: temp.password });
  }


  sendMail(contactForm: NgForm, token: any) {

    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer " + token
    })

    const httpOptions = {
      headers: headers_object
    };
    let temp = contactForm.value;
    let postData = { name: temp.name, email: temp.email, subject: temp.subject, phonenumber: temp.number, message: temp.messages, appname: "Kids Dictonary", receiveremail: this.recierEmail }

    console.log(postData);

    return this._http.post(this.mailSendApi, postData, httpOptions);

  }
}
