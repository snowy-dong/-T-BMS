import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { OrderComponent }    from './order.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'Order', component: OrderComponent }
  ])],
  exports: [RouterModule]
})
export class OrderRoutingModule {}
