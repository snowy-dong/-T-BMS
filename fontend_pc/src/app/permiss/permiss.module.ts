import { BrowserModule } from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { PermissComponent }     from './permiss.component';
import { PermissRoutingModule } from './permiss.routing.module';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { ButtonsModule, ModalModule, AccordionModule,PaginationModule } from 'ngx-bootstrap';
// or
@NgModule({
  imports:      [
    BrowserModule,
    PermissRoutingModule,
    FormsModule,ModalModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    PaginationModule.forRoot() ],
  declarations: [ PermissComponent ],
})
export class PermissModule {

}
