import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveModule }  from './active/active.module';
import { AccountModule }  from './account/account.module';
import { CategoryModule }   from './category/category.module';
import { GoodsModule } from './goods/goods.module';
import { OrderModule } from './order/order.module';
import { RoleModule } from './role/role.module';
import { StatisticsModule } from './statistics/statistics.module';
import {PermissModule} from './permiss/permiss.module'

import { TypeaheadModule,ModalModule   } from 'ngx-bootstrap';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ActiveModule,
    AccountModule,
    CategoryModule,
    GoodsModule,
    OrderModule,
    RoleModule,
    StatisticsModule,
    PermissModule,
    TypeaheadModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
