import { Component } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  constructor(private router:Router){}
  logout(){
    console.log('logout')
    this.router.navigate(['Login'])
  }
}
