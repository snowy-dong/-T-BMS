import { Directive, HostListener } from '@angular/core';
// 我们也可以在指令的 metadata 信息中，设定宿主元素的属性绑定信息
@Directive({
    selector: '[exeButtonPress]',
    host: {
      'role': 'button',
      '[class.pressed]': 'isPressed'
    }
})
export class ExeButtonPress {
    isPressed: boolean;

    @HostListener('mousedown') hasPressed() {
        this.isPressed = true;
    }
    @HostListener('mouseup') hasReleased() {
        this.isPressed = false;
    }
}
