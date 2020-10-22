import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FitPageRoutingModule } from './fit-routing.module';

import { FitPage } from './fit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FitPageRoutingModule
  ],
  declarations: [FitPage]
})
export class FitPageModule {}
