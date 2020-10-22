import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MallPageRoutingModule } from './mall-routing.module';

import { MallPage } from './mall.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MallPageRoutingModule,

    NgCircleProgressModule.forRoot({
      "radius": 80,
      "space": -20,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 20,
      "outerStrokeColor": "#7AFEC6",
      "outerStrokeGradientStopColor": "#C1FFE4",
      "innerStrokeColor": "	#F0F0F0",
      "innerStrokeWidth": 20,
      "title": " 日系",
      "titleColor": "#7AFEC6",
      "titleFontSize":" 40",
      "titleFontWeight":" 800",
      "subtitleColor": "#7AFEC6",
      "subtitleFontSize":"30",
      "subtitleFontWeight":" 800",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false
    })
  ],
  declarations: [MallPage]
})
export class MallPageModule {}
