import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },

  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: ()=> import('./PAGES/home/home.module').then(m=> m.HomePageModule)
    //loadChildren: () => import('./PAGES/live-location-home/live-location-home.module').then( m => m.LiveLocationHomePageModule)

  },
  {
    path: 'new-places',
    loadChildren: () => import('./PAGES/new-places/new-places.module').then( m => m.NewPlacesPageModule)
  },
  {
    path: 'place',
    loadChildren: () => import('./place/place.module').then( m => m.PlacePageModule)
  },
  {
    path: 'live-location-home',
    loadChildren: () => import('./PAGES/live-location-home/live-location-home.module').then( m => m.LiveLocationHomePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./PAGES/search/search.module').then( m => m.SearchPageModule)
  },  {
    path: 'active',
    loadChildren: () => import('./PAGES/active/active.module').then( m => m.ActivePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
