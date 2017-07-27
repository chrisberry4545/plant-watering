import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';

import { FirstUsePage } from '../pages/first-use/first-use.page';
import { PlantsListPage } from '../pages/plants-list/plants-list.page';
import { PlantEditPage } from './../pages/plant-edit/plant-edit.page';

import { DaysBeforeWaterComponent } from './../components/days-before-water/days-before-water.component';
import { PlantFormComponent } from './../components/plant-form/plant-form.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PlantDataProvider } from '../providers/plant-data/plant-data';

@NgModule({
  declarations: [
    MyApp,
    FirstUsePage,
    PlantsListPage,
    PlantEditPage,

    DaysBeforeWaterComponent,
    PlantFormComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FirstUsePage,
    PlantsListPage,
    PlantEditPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlantDataProvider
  ]
})
export class AppModule {}
