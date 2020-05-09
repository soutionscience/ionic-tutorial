import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PlacesService } from 'src/app/SERVICES/places.service';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-new-places',
  templateUrl: './new-places.page.html',
  styleUrls: ['./new-places.page.scss'],
})
export class NewPlacesPage implements OnInit {
  createPlaceForm: FormGroup
  location: {lat:number, lgn:number} = {lat:0, lgn: 0}

  constructor(private fb: FormBuilder, private placesService: PlacesService,
    private navCtr: NavController, private geoLaction: Geolocation) { }

  ngOnInit() {
    this.createForm()
  }

  createForm(){
    this.createPlaceForm = this.fb.group({
      title: '',
      location: ''
    })

  }

  addPlace(){
    this.createPlaceForm.value.location = this.location
    this.placesService.addPlace(this.createPlaceForm.value)
    this.navCtr.back()
  }
  getMyLocation(){
    this.geoLaction.getCurrentPosition().then((resp)=>{
       this.location.lat = resp.coords.latitude;
       this.location.lgn = resp.coords.longitude;
       console.log('detected ', this.location)
    }).catch((err)=>{
      console.log('what is the error: ', err)
    })

  }

}
