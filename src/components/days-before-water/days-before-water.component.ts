import {
  Component,
  Input,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'days-before-water-component',
  templateUrl: 'days-before-water.component.html',
})
export class DaysBeforeWaterComponent implements OnChanges {
  @Input()
  public nextWaterDate: string;
  @Input()
  public daysBetweenWatering: number;

  public daysBeforeWater: number;

  public ngOnChanges() {
    this.daysBeforeWater = this._getDaysBetween(
      new Date(this.nextWaterDate),
    );
  }

  private _getDaysBetween(
    nextWaterDate: Date,
  ) {
    const oneDay = 24*60*60*1000;
    const todaysDate = new Date();

    return Math.round(Math.abs((
      todaysDate.getTime() - nextWaterDate.getTime()
    ) / (oneDay)));
  }
}
