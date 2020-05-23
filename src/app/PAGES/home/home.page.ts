import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, Platform } from '@ionic/angular';
import { NewPlacesPage } from '../new-places/new-places.page';
import { PlacesService } from 'src/app/SERVICES/places.service';
import { PlacePage } from 'src/app/place/place.page';
import { SinglePAGEComponent } from 'src/app/COMPONENTS/single-page/single-page.component';
import { Place } from 'src/models/place.interface';
import { Geofence } from '@ionic-native/geofence/ngx';
import {Plugins} from '@capacitor/core'
const {Geolocation, SMS} = Plugins

//import { SMS } from '@ionic-native/sms';
import { ActivePage } from '../active/active.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  places: {title: string}[] =[];
  radius: number = 100
  error: any;
  success: any;

  constructor(public navCtrl: NavController, private placeService: PlacesService,
    private modalCtr: ModalController, private platform: Platform, private geofence: Geofence, 
    // private geolocation: Geolocation,
   ) {
      this.platform.ready().then(()=>{
        this.geofence.initialize().then(
          ()=> console.log('geofence pluging'),
          (error)=>console.log(error)
        )
      })
     }

  ngOnInit() {
  }
  ionViewWillEnter(){
   // console.log('firing')
   this.placeService.getPlaces().then(resp=>{
    // console.log('resp from ', resp)
     this.places = resp
   })
  }
  addNewPlace(){
    //console.log('clicked')
    //this.navCtrl.push(NewPlacesPage)
  }
   loadPage(place: Place){
    console.log('click ', place)
    let modal = this.modalCtr.create({
      component: SinglePAGEComponent,
      componentProps: place
    }).then((resp)=>resp.present())
    //return await modal.present();

  }
  onOpenPlace(){

  }

  //geofence stuff
  setGeofence(value: number){
    Geolocation.getCurrentPosition({
      enableHighAccuracy: true
    }).then((resp)=>{
      var lng = resp.coords.longitude;
      var lat = resp.coords.latitude;
      var radius = value;


      let fence = {
        id: "MygeofenceId",
        latitude: lat,
        longitude: lng,
        radius: radius,
        transitionType: 3
      }

      this.geofence.addOrUpdate(fence)
      .then(() => this.success = true,
      (error)=> this.error ="Failed to add or update the fence"
      )
      this.geofence.onTransitionReceived().subscribe(resp=>{
         SMS.send('0724604800', 'She left the house')
  
      })
      this.navCtrl.navigateForward('active')
    }).catch((error)=>{
      this.error = error
    })

   
  }

}
