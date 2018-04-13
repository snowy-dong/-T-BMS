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
    TypeaheadModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, httpInterceptorProviders, SessionStorage],
  bootstrap: [AppComponent]
})
export class AppModule { }
