import {
  PictureInterface,
} from './index';

import { ILocalNotification } from '@ionic-native/local-notifications';

interface Plant {
  id: number;
  picture: PictureInterface;
  daysBetweenWatering: number;
  nextWaterDate: Date;
}

export default Plant;
