import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'
const routes: Routes = [
  { path: '', redirectTo: '/Account', pathMatch: 'full' },
  { path: 'Account',loadChildren: 'app/account/account.module#AccountModule'},
  { path: 'Category',loadChildren: 'app/category/category.module#CategoryModule'},
  { path: 'Goods',loadChildren: 'app/goods/goods.module#GoodsModule'},
  { path: 'Active',loadChildren: 'app/active/active.module#ActiveModule'},
  { path: 'Order',loadChildren: 'app/order/order.module#OrderModule'},
  { path: 'Role',loadChildren: 'app/role/role.module#RoleModule'},
  { path: 'Permiss',loadChildren: 'app/permiss/permiss.module#PermissModule'},
  { path: 'Statistics',loadChildren: 'app/statistics/statistics.module#StatisticsModule'},

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
