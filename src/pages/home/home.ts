import { Component , NgZone, ViewChild} from '@angular/core';
import { NavController, Content } from 'ionic-angular';

import { TextToSpeech} from '@ionic-native/text-to-speech';

// declarar el objeto global 
declare var window;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  @ViewChild(Content)  contenido: Content;
  
  [x: string]: any;
  messages : any[] = [] ;
  text : string = "";

  constructor(public navCtrl: NavController, 
              public ngZone : NgZone , 
              private textToSpeech: TextToSpeech) {

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

// scroll despues de 200ms al finanl del content, pantalla 
    this.contenido.scrollToBottom(200);

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
// scroll despues de 200ms al finanl del content, pantalla 
        this.contenido.scrollToBottom(200);

      });

    }, (error)=> {

      alert(JSON.stringify(error));
    })

  }

  hablar() {
      window['ApiAIPlugin'].requestVoice({
      },(response) => {
          // alert(response.result.fulfillment.speech);
          this.textToSpeech.speak({
            text:  response.result.fulfillment.speech,
            locale: 'en-UK',
            rate : 1
            });

      }, err => {
        console.log('Err:>', err);
        alert('err '+ err);
      } );
  }


}
