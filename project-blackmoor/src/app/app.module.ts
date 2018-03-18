import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { PictureComponent } from '../app-picture.component/app-picture.component';
import { StatsComponent } from '../app-stats.component/app-stats.component';
import { BioComponent } from '../app-bio.component/app-bio.component';
import { MonsterGeneratorService } from '../monster-generator/monster-generator.service';
import { CHARACTER_GENERATOR } from '../shared/character-generator.injection-token';
import { FooterComponent } from '../app-footer/app-footer.component';
import { HealthComponent } from '../app-health.component/app-health.component';
import { ProgressBarModule } from '../app-progress-bar/progress-bar.module';
import { HeaderComponent } from '../app-header.component/app-header.component';
import { NavigationComponent } from '../app-navigation.component/app-navigation.component';
import { PortfolioComponent } from '../app-portfolio.component/app-portfolio.component';
import { AboutComponent } from '../app-about.component.html/app-about.component';
import { OurTeamComponent } from '../app-our-team.component/app-our-team.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyAkLGx785uCQ3tqKXtTIkwrYPZz3T73qzI',
  authDomain: 'projectblackmoor.firebaseapp.com',
  databaseURL: 'https://projectblackmoor.firebaseio.com',
  projectId: 'projectblackmoor',
  storageBucket: 'projectblackmoor.appspot.com',
  messagingSenderId: '963310124819'
};

@NgModule({
  declarations: [
    AppComponent,
    PictureComponent,
    BioComponent,
    StatsComponent,
    FooterComponent,
    HealthComponent,
    HeaderComponent,
    NavigationComponent,
    PortfolioComponent,
    AboutComponent,
    OurTeamComponent
  ],
  imports: [
    BrowserModule,
    ProgressBarModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    { provide: CHARACTER_GENERATOR, useClass: MonsterGeneratorService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
