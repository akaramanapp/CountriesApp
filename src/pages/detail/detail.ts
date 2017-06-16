import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
@Input()
export class DetailPage {
  homePage = HomePage
  selectedCountry;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
     this.selectedCountry = navParams.get('param1'); 
  }
}
