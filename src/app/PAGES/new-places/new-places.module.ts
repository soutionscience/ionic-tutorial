import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPlacesPageRoutingModule } from './new-places-routing.module';

import { NewPlacesPage } from './new-places.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NewPlacesPageRoutingModule
  ],
  providers:[Geolocation],
  declarations: [NewPlacesPage]
})
export class NewPlacesPageModule {}
