import { NgModule }           from '@angular/core';
import { ActiveComponent }     from './active.component';
import { ActiveService }       from './active.service';
import { ActiveRoutingModule } from './active.routing.module';

@NgModule({
  imports:      [ ActiveRoutingModule ],
  declarations: [ ActiveComponent ],
  providers:    [ ActiveService ]
})
export class ActiveModule { }
