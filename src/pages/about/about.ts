import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	public event = {
    month: '2018-02-19',
    timeStarts: '08:00'
  }

  constructor(public navCtrl: NavController) {

  }

}
