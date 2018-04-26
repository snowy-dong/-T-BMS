import { Component } from '@angular/core';
// 熟悉 Angular 1.x 的用户，应该都知道 ng-transclude 指令，通过该指令我们可以非常容易实现上述的功能。而在 Angular 2 中引入新的 ng-content 指令
@Component({
    selector: 'exe-greet',
    template: `
    <div class="border">
        <p>Greet Component</p>
        <ng-content></ng-content>
    </div>
    `,
    styles: [` .border { border: 2px solid #eee; } `]
})
export class GreetComponent { }
