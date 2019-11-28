import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../test/test.component';
import { Test2Component } from '../test2/test2.component';
import { RouterModule, Route } from '@angular/router';

const appRoutes: Route[] = [{
  component: TestComponent,
  path: 'test',
},{
  component: Test2Component,
  path: 'test2',
}];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]

})
export class RoutingModule { }
