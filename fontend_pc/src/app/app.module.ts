import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module'
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

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {httpInterceptorProviders} from './http-interceptors'

import {AuthService} from './auth.service'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LoginModule,
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
  providers: [AuthService,httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
