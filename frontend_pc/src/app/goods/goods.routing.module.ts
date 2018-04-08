import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { GoodsComponent }    from './goods.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'Goods', component: GoodsComponent }
  ])],
  exports: [RouterModule]
})
export class GoodsRoutingModule {}
