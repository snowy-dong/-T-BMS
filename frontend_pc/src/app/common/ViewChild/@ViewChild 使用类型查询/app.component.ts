import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child.component';

@Component({
  selector: 'my-app',
  template: `
    <h4>Welcome to Angular World</h4>
    <exe-child></exe-child>
  `,
})
export class AppComponent {

  @ViewChild(ChildComponent)
  childCmp: ChildComponent;

  ngAfterViewInit() {
    console.dir(this.childCmp);
  }
}
