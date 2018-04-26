import {Component,Input} from '@angular/core'
@Component({
  selector:'input-counter',
  template:` <p>当前值: {{ count }}</p>
  <button (click)="increment()"> + </button>
  <button (click)="decrement()"> - </button>`,
  styles:[]
})
export class CounterComponent {
  @Input()
  count:number = 0
  constructor(){}
  increment(){
    this.count++
  }
  decrement(){
    this.count--
  }
}
