import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StestService } from '../stest.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor(private stestService: StestService) {
    console.log(stestService.text1);
   }

  ngOnInit() {
  }

}
