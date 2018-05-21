import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html'
})
export class AboutPage {

	urlEncodeText: String;
	nome: String;
	telefone: String;
	email: String;
	idade: String;

	public event = {
		month: '19-02-2018',
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

	agendarSelected(){
		this.urlEncodeText = "Olá, gostaria de agendar uma consulta. Me chamo " + this.nome +
		" meu telefone é " + this.telefone +
		" minha idade é " + this.idade +
		". Teria disponibilidade para" + this.event.month +
		" no horário " + this.event.timeStarts + "?";
		window.open('https://api.whatsapp.com/send?phone=15551234567&text=' + this.urlEncodeText );
	}

}
