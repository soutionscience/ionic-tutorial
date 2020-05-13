import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Plugins} from '@capacitor/core'
import { AngularFireAuth } from '@angular/fire/auth/';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {} from 'google-maps';

/// <reference path="<relevant path>/node_modules/@types/googlemaps/index.d.ts" />

const {Geolocation} = Plugins
import { map } from 'rxjs/operators';

//declare var google;

@Component({
  selector: 'app-live-location-home',
  templateUrl: './live-location-home.page.html',
  styleUrls: ['./live-location-home.page.scss'],
})

export class LiveLocationHomePage implements OnInit {
  
  locations: Observable<any>;
  locationsCollections: AngularFirestoreCollection<any>
  user = null;
  watch: string;
  isTracking: boolean;

  

  @ViewChild ('map', {static:false}) mapElement: ElementRef;
  map: any;
  markers = [];


  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
    this.onLogin();
    this.isTracking = false;
   }

   ionViewWillEnter(){
     this.loadMap();
   }
   loadMap(){
     let latLng = new google.maps.LatLng(51.9036442, 7.6673267)
     let mapOptions ={
       center: latLng,
       zoom: 5,
       mapTypeId: google.maps.MapTypeId.ROADMAP
       
     }
     this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
   }

  ngOnInit() {
  }
  onLogin(){
    this.afAuth.signInAnonymously()
    .then((resp)=> {
      console.log('user ', resp.user)
      this.user = resp.user

      this.locationsCollections = this.afs.collection(
      `locations/${this.user.uid}/track`,
      ref=> ref.orderBy('timestamp'))
    //load firebase data

    this.locations = this.locationsCollections.snapshotChanges().pipe(
      map(actions=>
        actions.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data}
        }))
    )


  //update map
  this.locations.subscribe(locations=>{
    console.log('new locations', locations);
    this.updateMap(locations)
  })


})
  }

  updateMap(locations){
    this.markers.map(marker=> marker.setMap(null));
    this.markers = [];

    for(let loc of locations){
      let latLng = new google.maps.LatLng(loc.lat, loc.lng)

      let marker = new google.maps.Marker({
        position: latLng,
        animation: google.maps.Animation.DROP,
        map: this.map
      })
      this.markers.push(marker)
    }

  }

  startTracking(){
    this.isTracking = true;
    this.watch = Geolocation.watchPosition({}, (position,err)=>{
      console.log('new postion ', position);
      if(position){
        this.addNewLocation(
          position.coords.latitude,
          position.coords.longitude,
          position.timestamp
        )
      }

    })


  }
  stopTracking(){
    Geolocation.clearWatch({id:this.watch}).then(()=>{
      this.isTracking = false; 
    })

  }
  addNewLocation(lat, lng, timestamp){
    this.locationsCollections.add({
      lat, lng, timestamp
    });

    let position = new google.maps.LatLng(lat, lng);
    this.map.setCenter(position)
    this.map.setZoom(3)

  }
  deleteLocations(pos){
    console.log('what is pos ', pos);
    this.locationsCollections.doc(pos.id).delete()
  }

}
