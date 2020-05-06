import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./PAGES/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'new-places',
    loadChildren: () => import('./PAGES/new-places/new-places.module').then( m => m.NewPlacesPageModule)
  },
  {
    path: 'place',
    loadChildren: () => import('./place/place.module').then( m => m.PlacePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
