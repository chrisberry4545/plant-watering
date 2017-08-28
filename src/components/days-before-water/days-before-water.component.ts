import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'days-before-water-component',
  templateUrl: 'days-before-water.component.html',
})
export class DaysBeforeWaterComponent {
  @Input()
  public daysBeforeWater: number;
}
