import { NgModule }           from '@angular/core';
import { AccountComponent }     from './account.component';
import { AccountService }       from './account.service';
import { AccountRoutingModule } from './account.routing.module';

@NgModule({
  imports:      [ AccountRoutingModule ],
  declarations: [ AccountComponent ],
  providers:    [ AccountService ]
})
export class AccountModule { }
