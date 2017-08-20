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

  public isCreate: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _plantDataProvider: PlantDataProvider,
  ) {}

  ionViewDidLoad() {
    const plantToEdit = this.navParams.get('plant');
    if (plantToEdit) {
      this.plant = plantToEdit;
      this.isCreate = false;
    } else {
      this.plant = {
        id: plantId,
        daysBetweenWatering: 5,
      } as PlantInterface;
      plantId++;
      this.isCreate = true;
    }
  }

  public delete() {
    this._plantDataProvider.deletePlant(
      this.plant,
    );
    this._goBack();
  }

  public cancel() {
    this._goBack();
  }

  public save(plant: PlantInterface) {
    if (this.isCreate) {
      const dateNow = new Date();
      this._plantDataProvider.addPlant({
        ...plant,
        nextWaterDate: new Date(
          dateNow.getUTCFullYear(),
          dateNow.getUTCMonth(),
          dateNow.getDay() + plant.daysBetweenWatering,
        ),
      });
    } else {
      this._plantDataProvider.updatePlant(plant);
    }
    this._goBack();
  }

  private _goBack() {
    this.navCtrl.pop();
  }

}
