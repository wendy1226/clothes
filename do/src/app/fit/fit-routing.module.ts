import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FitPage } from './fit.page';

const routes: Routes = [
  {
    path: '',
    component: FitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FitPageRoutingModule {}
