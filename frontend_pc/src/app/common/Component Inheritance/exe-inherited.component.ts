import { Component, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { BaseComponent } from './exe-base.component';

@Component({
    selector: 'exe-inherited',
    template: `
    <div>
      exe-inherited：我是base组件么? - {{isBase}}
    </div>
  `
})
export class InheritedComponent extends BaseComponent
    implements OnChanges {

    @HostListener('click', ['$event']) // overridden
    onClick(event: Event) {
        console.log(`I am InheritedComponent`);
    }

    ngOnChanges(changes: SimpleChanges) {
        console.dir(this.eleRef); // this.eleRef.nativeElement：exe-inherited
    }
}
