import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PictureComponent } from '../app-picture.component/app-picture.component';
import { StatsComponent } from '../app-stats.component/app-stats.component';
import { BioComponent } from '../app-bio.component/app-bio.component';
import { MonsterGeneratorService } from '../monster-generator/monster-generator.service';
import { CHARACTER_GENERATOR } from '../shared/character-generator.injection-token';
import { FooterComponent } from '../app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureComponent,
    BioComponent,
    StatsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: CHARACTER_GENERATOR, useClass: MonsterGeneratorService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
