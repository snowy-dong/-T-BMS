import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
const routes: Routes = [
  { path: '', redirectTo: '/Category', pathMatch: 'full' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
