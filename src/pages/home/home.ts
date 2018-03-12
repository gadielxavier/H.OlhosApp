import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { EmergencyPage } from '../emergency/emergency';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  bookmarksSelected(){
    this.navCtrl.push(AboutPage);
  }

  medkitSelected(){
    this.navCtrl.push(EmergencyPage);
  }

  mapSelected(){
    this.navCtrl.push(DetailPage);
  }

  lensesSelected(){
    this.navCtrl.push(ContactPage);
  }

}
