import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  lentes: String;
  duracao: String;


  constructor(public navCtrl: NavController) {

  }

  whatsappSelected(){
  	window.open('https://api.whatsapp.com/send?phone=5575999539344&');
  }

  encomendarSelected(){
    window.open('https://api.whatsapp.com/send?phone=5575999539344&text=Gostaria%20de%20encomendar%20a%20lente%20'
     + this.lentes + '%20de%20dura%C3%A7%C3%A3o%20' + this.duracao);
  }

}
