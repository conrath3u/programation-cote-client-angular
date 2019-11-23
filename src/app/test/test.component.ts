import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() var_test:string;


  @Output() messageEvent=new EventEmitter<string>();
  push(){
    alert("OK");
    this.messageEvent.emit("this.message");
  }
}
