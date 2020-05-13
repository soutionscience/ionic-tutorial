import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveLocationHomePage } from './live-location-home.page';

const routes: Routes = [
  {
    path: '',
    component: LiveLocationHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveLocationHomePageRoutingModule {}
