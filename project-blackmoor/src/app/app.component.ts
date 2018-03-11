import { Component, OnInit, Inject } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

import { Monster } from '../monster-generator/monster-model';
import { ICharacterGenerator } from '../shared/character-generator.service.interface';
import { CHARACTER_GENERATOR } from '../shared/character-generator.injection-token';
import { Picture } from '../app-picture.component/picture.model';
import { MonsterVariables } from '../monster-generator/monster-variables-model';
import { LocationInfo } from '../app-bio.component/location.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public monsterVariables = new MonsterVariables();
  public monster: Monster;

  user: Observable<firebase.User>;
  items: AngularFireList<any[]>;
  msgVal = '';

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    @Inject(CHARACTER_GENERATOR)
    private monsterGeneratorService: ICharacterGenerator
  ) {}

  public ngOnInit(): void {
    this.getDataFromDatabase();
  }

  private getDataFromDatabase(): void {
    this.db
      .list<any>('monster')
      .valueChanges()
      .subscribe(
        result => {
          this.monsterVariables.locations = result[0].map(data => this.createLocationInfoModel(data));

          this.monsterVariables.pictures = result[1].map(data => this.createPictureModel(data));

          this.generateNewMonster();
        },
        error => {}
      );

    this.user = this.afAuth.authState;
  }

  private createLocationInfoModel(data: any): LocationInfo {
    const location = new LocationInfo(
      data.city,
      data.province,
      data.country,
      data.link
    );

    return location;
  }

  private createPictureModel(data: any): Picture {
    const picture = new Picture();
    picture.alt = data.alt;
    picture.href = data.href;

    return picture;
  }

  private generateNewMonster(): void {
    this.monster = this.monsterGeneratorService.generate(this.monsterVariables);
  }
}
