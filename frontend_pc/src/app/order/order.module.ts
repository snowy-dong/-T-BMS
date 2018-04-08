import { NgModule }           from '@angular/core';
import { OrderComponent }     from './order.component';
import { OrderService }       from './order.service';
import { OrderRoutingModule } from './order.routing.module';

@NgModule({
  imports:      [ OrderRoutingModule ],
  declarations: [ OrderComponent ],
  providers:    [ OrderService ]
})
export class OrderModule { }
