import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Welcome to Angular World</h1>
    <p #greet>Hello {{ name }}</p>
  `,
})
export class AppComponent {
  name: string = 'Semlinker';

  @ViewChild('greet')
  greetDiv: ElementRef;

  ngAfterViewInit() {
    console.dir(this.greetDiv);
  }
}
