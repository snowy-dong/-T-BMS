import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Welcome to Angular World</h1>
    <div>Hello {{ name }}</div>
  `,
})
export class AppComponent {

  name: string = 'Semlinker';

  constructor(private elementRef: ElementRef) {
    // let divEle = this.elementRef.nativeElement.querySelector('div');
    // console.dir(divEle);
  }
  // Angular 组件的生命周期。成功取到 div 元素
  ngAfterViewInit() { // 模板中的元素已创建完成
    console.dir(this.elementRef.nativeElement.querySelector('div'));
    // let greetDiv: HTMLElement = this.elementRef.nativeElement.querySelector('div');
    // greetDiv.style.backgroundColor = 'red';
  }
}
