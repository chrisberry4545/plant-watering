import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import { Storage } from '@ionic/storage';
import { LocalNotifications } from '@ionic-native/local-notifications';

import {
  PlantInterface,
} from './../../models/index';

/*
  Generated class for the PlantDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PlantDataProvider {

  private _plantStorageName = 'plants';
  private _plants: PlantInterface[];

  constructor(
    private _storage: Storage,
    private _localNotification: LocalNotifications,
  ) {}

  public pushTest() {
    // Schedule a single notification
    this._localNotification.schedule({
      id: 1,
      text: 'Single ILocalNotification',
    });
  }

  public getPlants(): Observable<PlantInterface[]> {
    this.pushTest();
    if (this._plants) {
      return Observable.of(this._plants);
    }
    return Observable.fromPromise(this._storage.get(
      this._plantStorageName
    )).map((plants) => {
      this._plants = plants ? plants : [];
      return this._plants;
    });
  }

  public addPlant(plant: PlantInterface) {
    this._plants.push(plant);
    this._updateStorage();
  }

  public updatePlant(plant: PlantInterface) {
    const indexOfPlant =
      this._plants.findIndex((plantInArray) => {
        return plantInArray.id === plant.id;
      });
    if (indexOfPlant > -1) {
      this._plants.splice(
        indexOfPlant,
        1,
        plant,
      );
    }
    this._updateStorage();
  }

  public deletePlant(plantToDelete: PlantInterface) {
    this._plants = this._plants.filter((plant) => (
      plant !== plantToDelete
    ));
    this._updateStorage();
  }

  private _updateStorage() {
    this._storage.set(
      this._plantStorageName,
      this._plants,
    );
  }

}
