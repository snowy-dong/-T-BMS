import { Component, ElementRef, Input, HostBinding, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'exe-base',
    // template will not be inherited
    template: `
    <div>
       exe-base：我是base组件么? - {{isBase}}
    </div>
  `
})
export class BaseComponent implements OnInit {
    @Input() isBase: boolean = true;

    @HostBinding('style.color') color = 'blue'; // will be inherited

    @HostListener('click', ['$event']) // will be inherited
    onClick(event: Event) {
        console.log(`I am BaseComponent`);
    }

    constructor(protected eleRef: ElementRef) { }

    ngOnInit() {
        console.dir('BaseComponent：ngOnInit method has been called');
    }
}
