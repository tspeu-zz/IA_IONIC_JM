import { Component , NgZone} from '@angular/core';
import { NavController } from 'ionic-angular';

// declarar el objeto global 
declare var window;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  messages : any[] = [] ;
  text : string = "";

  constructor(public navCtrl: NavController, public ngZone : NgZone) {

    this.messages.push({
      text: "Hi, how can I help you?",
      sender: "api"
    })

   
  }

  sendText(){

    let message = this.text;

    this.messages.push({
      text:  message,
      sender: "me"
    })

    this.text ="";

  // se envia el texto con el objeto del plugIn ->
  window["ApiAIPlugin"].requestText({
    query: message
    }, (response)=>{

      this.ngZone.run(() =>{
         // alert(JSON.stringify(response));
        this.messages.push({
          text: response.result.fulfillment.speech,
          sender: "api"
        });
      })

    }, (error)=> {

      alert(JSON.stringify(error));
    })

  }


}
