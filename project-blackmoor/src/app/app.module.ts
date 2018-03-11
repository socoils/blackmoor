import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PictureComponent } from '../app-picture-component/app-picture-component';
import { BioComponent } from '../app-bio-component/app-bio-component';
import { StatsComponent } from '../app-stats-component/app-stats-component';


@NgModule({
  declarations: [
    AppComponent,
    PictureComponent,
    BioComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
