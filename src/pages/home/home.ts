import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

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
    this.navCtrl.push('EmergencyPage');
  }

  mapSelected(){
    this.navCtrl.push('DetailPage');
  }

  eyeSelected(){
    this.navCtrl.push(ContactPage);
  }

  contactsSelected(){
    this.navCtrl.push('StaffPage');
  }

  helpSelected(){
    this.navCtrl.push('QuestionsPage');
  }

}
