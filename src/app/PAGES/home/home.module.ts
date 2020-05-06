import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SinglePAGEComponent } from 'src/app/COMPONENTS/single-page/single-page.component';

@NgModule({
  entryComponents:[SinglePAGEComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, SinglePAGEComponent]
})
export class HomePageModule {}
