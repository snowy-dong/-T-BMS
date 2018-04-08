import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForOf } from '@angular/common';
import { ButtonsModule, ModalModule, AccordionModule, PaginationModule } from 'ngx-bootstrap';
import { PermissComponent } from './permiss.component';
import { PermissRoutingModule } from './permiss.routing.module';
// or
@NgModule({
  imports: [
    BrowserModule,
    PermissRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    PaginationModule.forRoot()],
  declarations: [PermissComponent],
})
export class PermissModule {

}