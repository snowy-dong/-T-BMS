import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exe-app',
  template: `
    <exe-base></exe-base>
    <hr/>
    <exe-inherited [isBase]="false"></exe-inherited>
  `
})
export class AppComponent {
  currentPage: number = 1;
  totalPage: number = 5;
}
