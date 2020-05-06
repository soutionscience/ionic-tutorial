import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss'],
})
export class SinglePAGEComponent implements OnInit {
  lat:number;
  lgn:number;

  constructor(private modalCtr: ModalController, private navParams: NavParams ) { 
    this.lat = this.navParams.data.location.lat
    this.lgn = this.navParams.data.location.lgn
  }

  ngOnInit() {
    console.log(this.navParams.data)
  }
  
  dismiss(){
    this.modalCtr.dismiss()

  }
}
