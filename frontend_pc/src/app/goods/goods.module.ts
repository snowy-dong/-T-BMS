import { NgModule }           from '@angular/core';
import { GoodsComponent }     from './goods.component';
import { GoodsService }       from './goods.service';
import { GoodsRoutingModule } from './goods.routing.module';

@NgModule({
  imports:      [ GoodsRoutingModule ],
  declarations: [ GoodsComponent ],
  providers:    [ GoodsService ]
})
export class GoodsModule { }
