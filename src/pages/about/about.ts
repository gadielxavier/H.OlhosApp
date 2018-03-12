import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html'
})
export class AboutPage {

	public event = {
		month: '2018-02-19',
		timeStarts: '08:00'
	}

	constructor(public alertCtrl: AlertController) {

	}

	showAlert() {
		let alert = this.alertCtrl.create({
			title: 'Concluído!',
			subTitle: 'Entraremos em contato para confimar sua consulta',
			buttons: ['OK']
		});
		alert.present();
	}

}
