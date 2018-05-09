import { Component} from '@angular/core';

@Component({
  selector: 'exe-app',
  styles: [`
    button {
      background: blue;
      color: white;
      border: 1px solid #eee;
    }
  `],
  template: `
    <button counting>增加点击次数</button>
  `
})
export class AppComponent {}
