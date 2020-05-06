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

  constructor(private fb: FormBuilder, private placesService: PlacesService,
    private navCtr: NavController, private geoLaction: Geolocation) { }

  ngOnInit() {
    this.createForm()
  }

  createForm(){
    this.createPlaceForm = this.fb.group({
      title: ''
    })

  }

  addPlace(){
    this.placesService.addPlace(this.createPlaceForm.value)
    this.navCtr.pop()
  }
  getMyLocation(){
    this.geoLaction.getCurrentPosition().then((resp)=>{
      console.log('responce from geo', resp)
    }).catch((err)=>{
      console.log('what is the error: ', err)
    })

  }

}
