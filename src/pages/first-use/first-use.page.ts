import {
  Component,
  ViewChild,
} from '@angular/core';

import { Camera } from '@ionic-native/camera';

import { NavController } from 'ionic-angular';

import { PlantEditPage } from './../plant-edit/plant-edit.page';

@Component({
  selector: 'first-use-page',
  providers: [
    Camera,
  ],
  templateUrl: 'first-use.page.html'
})
export class FirstUsePage {
  @ViewChild('fileInput')
  public fileInput;

  constructor(
    private _navController: NavController,
    private _camera: Camera,
  ) {}

  public goToSetupWaterSchedule(plantPictureData: string) {
    this._navController.push(PlantEditPage, {
      plantPictureData,
    });
  }


  public getPicture() {
      if (Camera['installed']()) {
        this._camera.getPicture({
          destinationType: this._camera.DestinationType.DATA_URL,
          targetWidth: 96,
          targetHeight: 96
        }).then((data) => {
          const profilePic = 'data:image/jpg;base64,' + data;
          this.goToSetupWaterSchedule(profilePic);
        }, (err) => {
          alert('Unable to take photo');
        })
      } else {
        this.fileInput.nativeElement.click();
      }
  }

  public processWebImage(event) {
    const reader = new FileReader();
    reader.onload = (readerEvent) => {
      const imageData = (readerEvent.target as any).result;
      this.goToSetupWaterSchedule(imageData);
    };

    reader.readAsDataURL(event.target.files[0]);
  }
}
