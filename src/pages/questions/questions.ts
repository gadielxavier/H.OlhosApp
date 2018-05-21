import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-questions',
 	templateUrl: 'questions.html',
 })
 export class QuestionsPage {

 	textQuestion: String;

 	constructor(public navCtrl: NavController, public navParams: NavParams) {
 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad QuestionsPage');
 	}

 	enviarSelected(){
		window.open('https://api.whatsapp.com/send?phone=15551234567&text=' + this.textQuestion );
	}


 }
