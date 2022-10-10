import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NortePage } from './norte.page';

const routes: Routes = [
  {
    path: '',
    component: NortePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NortePageRoutingModule {}
