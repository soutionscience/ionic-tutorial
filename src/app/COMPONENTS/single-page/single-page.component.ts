import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.scss'],
})
export class SinglePAGEComponent implements OnInit {

  constructor(private modalCtr: ModalController) { }

  ngOnInit() {}
  
  dismiss(){
    this.modalCtr.dismiss()

  }
}
