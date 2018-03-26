import { NgModule }           from '@angular/core';
import { RoleComponent }     from './role.component';
import { RoleService }       from './role.service';
import { RoleRoutingModule } from './role.routing.module';

@NgModule({
  imports:      [ RoleRoutingModule ],
  declarations: [ RoleComponent ],
  providers:    [ RoleService ]
})
export class RoleModule { }
