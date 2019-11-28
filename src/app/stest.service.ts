import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StestService {

  text1 = "text pour test.component.ts";
  constructor() {
    //console.log(this.text1);
  }
}
