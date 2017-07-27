import {
  Component,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'days-before-water-component',
  templateUrl: 'days-before-water.component.html',
})
export class DaysBeforeWaterComponent {
  @Input()
  public set daysBeforeWater(value: number) {
    this.daysBeforeWateringArray
      = Array(value).fill(0);
  }

  public daysBeforeWateringArray: number[];
}
