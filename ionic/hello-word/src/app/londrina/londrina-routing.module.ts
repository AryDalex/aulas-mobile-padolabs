import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LondrinaPage } from './londrina.page';

const routes: Routes = [
  {
    path: '',
    component: LondrinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LondrinaPageRoutingModule {}
