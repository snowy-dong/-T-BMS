import { NgModule }           from '@angular/core';
import { PermissComponent }     from './permiss.component';
import { PermissRoutingModule } from './permiss.routing.module';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { ButtonsModule, ModalModule, AccordionModule } from 'ngx-bootstrap';
// or
@NgModule({
  imports:      [ PermissRoutingModule,FormsModule,ModalModule.forRoot(),AccordionModule.forRoot(),ButtonsModule.forRoot() ],
  declarations: [ PermissComponent ],
})
export class PermissModule {

}
