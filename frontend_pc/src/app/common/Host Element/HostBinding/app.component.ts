import { Component } from '@angular/core';

@Component({
  selector: 'exe-app',
  styles: [`
    button {
      background: blue;
      color: white;
      border: 1px solid #eee;
    }
    button.pressed {
      background: red;
    }
  `],
  template: `
    <button exeButtonPress>按下按钮</button>
  `
})
export class AppComponent { }
