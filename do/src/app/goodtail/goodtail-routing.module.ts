import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodtailPage } from './goodtail.page';

const routes: Routes = [
  {
    path: '',
    component: GoodtailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodtailPageRoutingModule {}
