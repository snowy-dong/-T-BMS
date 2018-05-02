import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoleComponent } from './role.component';
import { RoleService } from './role.service';
import { RoleRoutingModule } from './role.routing.module';
import { ButtonsModule, ModalModule, AccordionModule, PaginationModule } from 'ngx-bootstrap';
import { NgxSelectModule } from 'ngx-select-ex';

@NgModule({
  imports: [
    CommonModule,
    RoleRoutingModule,
    FormsModule,
    NgxSelectModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    PaginationModule.forRoot()],
  declarations: [RoleComponent],
  providers: [RoleService]
})
export class RoleModule { }
