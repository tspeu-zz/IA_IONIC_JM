AGENT son los modulos que uanso lenaguale batural son capaces de realizar y hacer acciones 
convierte natural lenguaje en data que reacciona
api.aiel agene e capaz de entender el lenguaje natural y realizar accione o reproducir eventoss
lo agenetes se pueden oncluit en las app

API:IA otor dk y api, los agenetes hay que probragamrlos

el agente tiene intents ue son lo que reaccionean cuando 
la info de entrada congenia con el intent

agent utiliza la entrada del usuario en forma de lenguaje natural
 y lo convierte en data prosesables..

 esta transformacione entre user input y acionable data 
 se hace cunado la info de entrada coincide con alguno de 
 los ITENTS dentro del AGENT

Hay que crear INTENT dentro del agente para que reaccione a las
condiciones de entrada
##IoniAI
INTENTS
hay dos por defecto
#default fallback --> todos los que no puede manejar el welcome Intent
#default welcome ---> Se encarga de los intents de saludos

Context--> Usar say-> son las frases de entrada que puede aceptar
este INTENT y al cual reacciona

ENTITY son las variables que se les pasa en la entrada 
y a las cuales puede reaccionar la api.
 añ crear una ENTITY se necesita es valor para reaccionar por lo que
 se debe colocar como requiered para que en caso que ese valor no
 está nculido en la info de entrada se pida explicitamente por el en 
 forma de pop up


 FULLFILMENT-->webook
 te deja enviar toda la data que usaruia entra que el INTENT encuan tra
 del la entrrada de usuario como JSON hacia un endPoint especificado->
 çes decir enviarlo a una urla espcifia, firebase, etc
 se coloca una url y API.AI hace un post hacia esa URL con la info extraida de ese intent-> es decir en el ejemplo la edad->
 en base a esos parametros se puede crear una logica en el servidor-> ademas esto se debe ir al intent especifico y activar FULLFILLMENT-->
 
  #cordova plugin add cordova-plugin-apiai
  

  iniciaclizar el plug- pero e¡l objeto global en el contexto de js
  no se indentifica.->
  proque no hay un objto

  hay que declarar un objeto global con
  decalre var-->
  window es el on¡bjeto globla el root de todo js app
  -->

  asi se le pasa con el index, ya es lo enciantra en el arbol de objetos 
  desde obj->

  @ionic-native/text-to-speech@4.7.0
  ionic cordova plugin add cordova-plugin-tts --save