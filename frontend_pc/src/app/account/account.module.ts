import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonsModule, ModalModule, AccordionModule, PaginationModule } from 'ngx-bootstrap';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account.routing.module';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    PaginationModule.forRoot()],
  declarations: [AccountComponent],
})
export class AccountModule { }
