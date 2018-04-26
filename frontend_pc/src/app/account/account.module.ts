import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonsModule, ModalModule, AccordionModule, PaginationModule } from 'ngx-bootstrap';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account.routing.module';
import { ExeBackgroundDirective } from '../common/Directive/exeBackground'
import { UnlessDirective } from '../common/Directive/exeUnless'
import { ChildComponent } from '../common/component/child.component'
import { ViewEncapsulationNoneComponent } from '../common/component/ViewEncapsulation/ViewEncapsulation.None'
import { ViewEncapsulationEmulatedComponent } from '../common/component/ViewEncapsulation/ViewEncapsulation.Emulated'
import { ViewEncapsulationNativeComponent } from '../common/component/ViewEncapsulation/ViewEncapsulation.Native'
import { CounterComponent } from '../common/@Input/counter.component'
@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    PaginationModule.forRoot()],
  declarations: [
    AccountComponent,
    ExeBackgroundDirective,
    UnlessDirective,
    ChildComponent,
    ViewEncapsulationNoneComponent,
    ViewEncapsulationEmulatedComponent,
    ViewEncapsulationNativeComponent,
    CounterComponent
  ],
})
export class AccountModule { }
