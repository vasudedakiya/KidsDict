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

  postMail(contactForm: NgForm) {
    if (contactForm.valid) {
      let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      let email = contactForm.value;
      this._http.post('https://formspree.io/f/mjvjalpz',
        { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(function (response: any) {
          console.log(response);
        }
        );
    }
  }


}
