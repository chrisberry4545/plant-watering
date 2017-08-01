import {
  PictureInterface,
} from './index';

interface Plant {
  id: number;
  picture: PictureInterface;
  daysBetweenWatering: number;
  nextWaterDate: Date;
}

export default Plant;
