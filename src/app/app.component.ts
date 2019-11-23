import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-kevin-conrath';
  var_test = 'azerty';

  message : string;

  receiveMessage($event: string){
    this.message = $event;
    alert(this.message);
  }

}


