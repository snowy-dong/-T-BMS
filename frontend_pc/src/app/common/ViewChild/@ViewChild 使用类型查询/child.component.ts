import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'exe-child',
    template: `
      <p>Child Component</p>
    `
})
export class ChildComponent {
    name: string = 'child-component';
}
