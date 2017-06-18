import { Injectable } from '@angular/core';

declare global {

  interface Window {
    io: any;    
  }

}

@Injectable()
export class CommunicateService {

  /**
   * Holds the current socket connection to server.
   * If you want to change your remote, you need to change
   * this socket connection.
   */
  public socket: any;

  /**
   * Connects to a socket IO server, based on it's url
   */
  connect (URL = 'http://localhost:7000') {
    
    if (window.io) {
      console.log('%c Connecting to server at: ' + URL , 'color:yellow; background:black;');
      window.io.sails.autoConnect = false;
      this.socket = window.io.sails.connect(URL , undefined , true);

      this.socket.on('connect' , function (client) {
        console.log('Connected to remote socket server' , URL);
      });

      this.socket.on('message', message => {
        console.log('Message > ' , message);
      });
    } else {
      console.warn('%c window.io is not present. Make sure you included client socket file.' , 'color: orange');
    }


  }

}
