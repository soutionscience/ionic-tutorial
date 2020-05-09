import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { NewPlacesPage } from '../new-places/new-places.page';
import { PlacesService } from 'src/app/SERVICES/places.service';
import { PlacePage } from 'src/app/place/place.page';
import { SinglePAGEComponent } from 'src/app/COMPONENTS/single-page/single-page.component';
import { Place } from 'src/models/place.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  places: {title: string}[] =[];

  constructor(public navCtrl: NavController, private placeService: PlacesService,
    private modalCtr: ModalController) { }

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

}
