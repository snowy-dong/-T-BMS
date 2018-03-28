import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { PermissComponent }    from './permiss.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'Permiss', component: PermissComponent }
  ])],
  exports: [RouterModule]
})
export class PermissRoutingModule {}
