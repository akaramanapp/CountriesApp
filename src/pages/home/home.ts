import { Component} from '@angular/core';
import { RestProvider } from '../../providers/rest/rest';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { DetailPage } from "../detail/detail";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  detailPage = DetailPage;
  countries: string[];
  errorMessage: string;
  testRadioOpen: boolean;
  testRadioResult = "";
  selectedCountry;
  constructor(public rest: RestProvider, public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

  }

  selected(country){
    this.navCtrl.push(DetailPage, {
      param1: country
    });
  }

  ionViewDidLoad() {
    this.getCountries();
  }

  getCountries() {
    this.presentLoading();
    this.rest.getCountries()
      .subscribe(
      countries => this.countries = countries,
      error => this.errorMessage = <any>error);
  }

  doRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');
    alert.addInput({
      type: 'radio',
      label: 'Africa',
      value: 'Africa'
    });

    alert.addInput({
      type: 'radio',
      label: 'Americas',
      value: 'Americas'
    });

    alert.addInput({
      type: 'radio',
      label: 'Asia',
      value: 'Asia'
    });

    alert.addInput({
      type: 'radio',
      label: 'Europe',
      value: 'Europe'
    });
     alert.addInput({
      type: 'radio',
      label: 'Oceania',
      value: 'Oceania'
    });
  

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
    
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }


}
