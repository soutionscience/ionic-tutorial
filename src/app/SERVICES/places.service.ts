import { Injectable } from '@angular/core';
import{ Storage} from '@ionic/storage'
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places: {title: string}[]=[]


  constructor(private storage: Storage) { }

  addPlace(place: {title: string}){
    this.places.push(place)
    this.storage.set('places', this.places);

  }
  getPlaces(){
   // console.log(this.places)
   return  this.storage.get('places')
    .then((resp)=>{
     //console.log('resp', resp)
      this.places = resp != null? resp  : [];
      return this.places.slice()
    })

  }
}
