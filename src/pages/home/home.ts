import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// declarar el objeto global 
declare var window;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    messages : any[] = [] ;
  constructor(public navCtrl: NavController) {

    this.messages.push({
      text: "Hi, how can I help you?",
      sender: "api"
    })

    this.messages.push({
      text: "Hello",
      sender: "me"
    })
  }

  sendText(){
  // se envia el texto con el objeto del plugIn ->
  window["ApiAIPlugin"].requestText({
    query: "Hola"
    }, (response)=>{

      alert(JSON.stringify(response));
    }, (error)=> {

      alert(JSON.stringify(error));
    })

  }


}
