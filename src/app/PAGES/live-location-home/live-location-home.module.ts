import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveLocationHomePageRoutingModule } from './live-location-home-routing.module';

import { LiveLocationHomePage } from './live-location-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveLocationHomePageRoutingModule
  ],
  declarations: [LiveLocationHomePage]
})
export class LiveLocationHomePageModule {}
