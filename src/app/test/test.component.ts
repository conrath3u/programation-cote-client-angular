import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StestService } from '../stest.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //importe stest Service pour pouvoir utiliser ses variables
  constructor(private stestService: StestService){
    }

  ngOnInit() {
  }

  @Input() var_test:string;


  @Output() messageEvent=new EventEmitter<string>();
  push(){
    alert("OK");
    let e = "qwerty";
    this.messageEvent.emit(e);
  }

  //Affiche la varrible text.1 contenu dans le stest Service
  alertText(){
    alert(this.stestService.text1);
    this.stestService.text1 = "text 1 modifié blabla";
  }



}
