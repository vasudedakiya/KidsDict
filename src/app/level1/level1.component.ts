import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css']
})
export class Level1Component implements OnInit {

  temp1 = "../../assets/images/Spelling_Button/SpelingButton1.webp";
  temp2 = "../../assets/images/Spelling_Button/SpelingButton2.webp";
  temp3 = "../../assets/images/Spelling_Button/SpelingButton3.webp";
  temp4 = "../../assets/images/Spelling_Button/SpelingButton4.webp";
  temp5 = "../../assets/images/Spelling_Button/SpelingButton5.webp";
  temp6 = "../../assets/images/Spelling_Button/SpelingButton6.webp";
  temp7 = "../../assets/images/Spelling_Button/SpelingButton7.webp";
  temp8 = "../../assets/images/Spelling_Button/SpelingButton8.webp";



  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  goBack() {
    this._route.navigate(['level', 1])
  }

}
