import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';

import { SearchPage } from './search.page';
import { SearchComponent } from 'src/app/COMPONENTS/search/search.component';
import { MapSearchComponent } from 'src/app/COMPONENTS/map-search/map-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule
  ],
  declarations: [SearchPage, MapSearchComponent]
})
export class SearchPageModule {}
