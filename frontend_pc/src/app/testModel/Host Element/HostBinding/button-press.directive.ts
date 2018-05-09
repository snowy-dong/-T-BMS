import { Directive, HostBinding, HostListener } from '@angular/core';
// HostBinding 是属性装饰器，用来动态设置宿主元素的属性值。
@Directive({
    selector: '[exeButtonPress]'
})
export class ExeButtonPress {
    @HostBinding('attr.role') role = 'button';
    @HostBinding('class.pressed') isPressed: boolean;

    @HostListener('mousedown') hasPressed() {
        this.isPressed = true;
    }
    @HostListener('mouseup') hasReleased() {
        this.isPressed = false;
    }
}
