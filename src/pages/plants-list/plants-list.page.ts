import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PlantDataProvider } from './../../providers/plant-data/plant-data';

import { PlantEditPage } from './../plant-edit/plant-edit.page';

import {
  PlantInterface,
} from './../../models/index';

/**
 * Generated class for the PlantsListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-plants-list-page',
  templateUrl: 'plants-list.page.html',
})
export class PlantsListPage {

  public plants: PlantInterface[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _plantDataProvider: PlantDataProvider,
  ) {}

  public ionViewDidEnter() {
    this._plantDataProvider.getPlants().subscribe((plants) => {
      this.plants = plants;
    });
  }

  public editPlant(plant: PlantInterface) {
    this.navCtrl.push(PlantEditPage, {
      plant,
    });
  }

  public addPlant() {
    this.navCtrl.push(PlantEditPage);
  }

}
