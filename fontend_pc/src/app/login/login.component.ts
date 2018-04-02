import { Component, TemplateRef, OnInit, NgModule, Directive } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { LoginService } from './login.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {
  public name:String;
  public password:String;
  public data:Object
  constructor(private router: Router,private loginService:LoginService) {}
  public ngOnInit(): void {

  }
  public login():void {
    let data = {
      name:this.name,
      password:this.password
    }
    this.loginService.login(data)
    .subscribe(data => {
      this.data = data
    })
  }
}

