import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  whatsappSelected(){
  	window.open('https://api.whatsapp.com/send?phone=5575999166868');
  }

  facebookSelected(){
  	window.open('https://facebook.com');
  }

}
