import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {
  PlantInterface,
} from './../../models/index';

import {
  PlantDataProvider,
} from './../../providers/plant-data/plant-data';

let plantId = 0;
/**
 * Generated class for the PlantEditPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-plant-edit-page',
  templateUrl: 'plant-edit.page.html',
})
export class PlantEditPage {

  public plant: PlantInterface;

  private _isCreate: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _plantDataProvider: PlantDataProvider,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlantEditPage');
    const plantToEdit = this.navParams.get('plant');
    if (plantToEdit) {
      this.plant = plantToEdit;
      this._isCreate = false;
    } else {
      this.plant = {
        id: plantId,
        daysBetweenWatering: 5,
      } as PlantInterface;
      plantId++;
      this._isCreate = true;
    }
  }

  public cancel() {
    this.navCtrl.pop();
  }

  public save(plant) {
    if (this._isCreate) {
      this._plantDataProvider.addPlant(plant);
    } else {
      this._plantDataProvider.updatePlant(plant);
    }
    this.navCtrl.pop();
  }

}
