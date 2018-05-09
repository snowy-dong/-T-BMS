import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { ChildComponent } from './@ViewChild 使用类型查询/child.component';

@Component({
  selector: 'my-app',
  template: `
    <h4>Welcome to Angular World</h4>
    <exe-child></exe-child>
    <exe-child></exe-child>
  `,
})
export class AppComponent {

  @ViewChildren(ChildComponent)
  childCmps: QueryList<ChildComponent>;

  ngAfterViewInit() {
    console.dir(this.childCmps);
  }
}
