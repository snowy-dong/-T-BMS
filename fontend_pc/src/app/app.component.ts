import { Component } from '@angular/core';
import {Router} from "@angular/router"
import {AuthService} from './auth.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'app';
  constructor(private router:Router, private auth: AuthService){}
  logout(){
    console.log('logout')
    this.auth.setAuthorizationToken('')
    this.router.navigate(['Login'])
  }
}
