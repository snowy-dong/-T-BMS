import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TypeaheadModule,ModalModule   } from 'ngx-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module'
import { AppComponent } from './app.component';
// import { ActiveModule }  from './active/active.module';
// import { AccountModule }  from './account/account.module';
// import { CategoryModule }   from './category/category.module';
// import { GoodsModule } from './goods/goods.module';
// import { OrderModule } from './order/order.module';
// import { RoleModule } from './role/role.module';
// import { StatisticsModule } from './statistics/statistics.module';
// import { PermissModule} from './permiss/permiss.module'

import { HomeComponent } from './home/home.component';

import { httpInterceptorProviders} from './http-interceptors'
import {AuthService} from './auth.service'
import { AuthGuard } from './auth-guard.service';
import { SessionStorage } from './common/session.storage';
@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    LoginModule,
    // ActiveModule,
    // AccountModule,
    // CategoryModule,
    // GoodsModule,
    // OrderModule,
    // RoleModule,
    // StatisticsModule,
    // PermissModule,
    TypeaheadModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, httpInterceptorProviders, SessionStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
