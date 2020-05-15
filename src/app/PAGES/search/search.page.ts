import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
map: any;
service: any;
infowindow: any;
places: any [];

  @ViewChild('map', {static: false}) mapElement: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.initializeMap()
  }
  initializeMap(){
    console.log('onview');
    let sydney  = new google.maps.LatLng(-33.867, 151.195);
    this.infowindow = new google.maps.InfoWindow()
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      {center: sydney, zoom: 15}
    )
   this.service = new google.maps.places.PlacesService(this.map)
  // console.log('serviceis ', this.service )
  }

  search(value){
    let request = {
      query: value,
      fields: ['name', 'geometry'],
    }

    this.service.findPlaceFromQuery(request, (results, status)=>{
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.places = results;
        //console.log(this.places[0].name)
      }else{
        console.log('error getting request')
      }
    })

  }

  selectPlace(p){
    console.log('selected ', p)
  }

}
