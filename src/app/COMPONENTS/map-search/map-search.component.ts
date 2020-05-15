import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-map-search',
  templateUrl: './map-search.component.html',
  styleUrls: ['./map-search.component.scss'],
})


export class MapSearchComponent implements OnInit {
map: any;
service: any;
infowindow: any; 
@ViewChild('map', {static: false}) mapElement: ElementRef

  constructor() {
  //  this.initializeMap()
  
   }
   ionViewWillEnter(){
     this.initializeMap()
   }
   initializeMap(){
     console.log('not here')
     let sydney  = new google.maps.LatLng(-33.867, 151.195)
     this.infowindow = new google.maps.InfoWindow()
     this.map = new google.maps.Map(
       this.mapElement.nativeElement,
       {center: sydney, zoom: 15}
     )
    this.service = new google.maps.places.PlacesService(this.map)
    console.log('serviceis ', this.service )
   }

  ngOnInit() {}

  search(value){
    let request = {
      query: value
    }
    this.service.findPlaceFromQuery(request, (result, status)=>{
      if(status === google.maps.places.PlacesServiceStatus.OK){
        console.log('results ama ', result)
      }else{
        console.log('not found')
      }
    })
  }

}
