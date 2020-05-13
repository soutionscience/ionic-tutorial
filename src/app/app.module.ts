import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlacesService } from './SERVICES/places.service';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { PlacePage } from './place/place.page';
//import { NewPlacePipe } from './PAGES/new-place.pipe';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from '@angular/fire';
 import { environment } from 'src/environments/environment';
 import { AngularFireAuthModule } from '@angular/fire/auth';
 import { AngularFireDatabaseModule } from '@angular/fire/database';
 import { AngularFireStorageModule } from '@angular/fire/storage';

//alternative
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { AngularFirestoreModule } from '@angular/fire/firestore/';





@NgModule({
  declarations: [AppComponent, PlacePage],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC17wNTqyVviI5lBPxF3S3mxPGkrXMPAlM'
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
     
   AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule
  
 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PlacesService,


    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
