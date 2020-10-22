import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoodtailPageRoutingModule } from './goodtail-routing.module';

import { GoodtailPage } from './goodtail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoodtailPageRoutingModule
  ],
  declarations: [GoodtailPage]
})
export class GoodtailPageModule {}
