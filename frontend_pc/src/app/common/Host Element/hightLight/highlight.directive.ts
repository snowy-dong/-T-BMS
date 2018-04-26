import { Directive, HostListener, ElementRef, Renderer } from '@angular/core';
// 我们也可以监听宿主元素外，其它对象产生的事件，如 window 或 document 对象。具体示例如下：
@Directive({
    selector: '[exeHighlight]'
})
export class ExeHighlight {
    constructor(private el: ElementRef, private renderer: Renderer) { }

    @HostListener('document:click', ['$event'])
    onClick(btn: Event) {
        if (this.el.nativeElement.contains(event.target)) {
            this.highlight('yellow');
        } else {
            this.highlight(null);
        }
    }

    highlight(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}
