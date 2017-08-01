import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

import { Camera } from '@ionic-native/camera';

import {
  PlantInterface,
} from './../../models/index';

@Component({
  providers: [
    Camera,
  ],
  selector: 'plant-form-component',
  templateUrl: 'plant-form.component.html',
})
export class PlantFormComponent {
  @ViewChild('fileInput')
  public fileInput;

  @Input()
  public plant: PlantInterface;

  @Input()
  public showDelete: boolean;

  @Output()
  public onCancel = new EventEmitter();

  @Output()
  public onSave = new EventEmitter<PlantInterface>();

  @Output()
  public onDelete = new EventEmitter();

  constructor(
    private _camera: Camera,
  ) {}

  public swapPicture() {
      if (Camera['installed']()) {
        this._camera.getPicture({
          destinationType: this._camera.DestinationType.DATA_URL,
          targetWidth: 96,
          targetHeight: 96
        }).then((data) => {
          const profilePic = 'data:image/jpg;base64,' + data;
          this.plant.picture = {
            url: profilePic,
          };
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
      this.plant.picture = {
        url: imageData,
      };
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  public delete() {
    this.onDelete.emit();
  }

  public cancel() {
    this.onCancel.emit();
  }

  public save() {
    this.onSave.emit(this.plant);
  }

}
