import { Injectable } from '@angular/core';
import { Monster } from './monster-model';
import { ICharacterGenerator } from '../shared/character-generator.service.interface';
import { Statistic } from '../app-stats.component/stats.model';
import { Biography } from '../app-bio.component/biography.model';
import { LocationInfo } from '../app-bio.component/location.model';
import { MonsterVariables } from './monster-variables-model';
import { Picture } from '../app-picture.component/picture.model';

@Injectable()
export class MonsterGeneratorService implements ICharacterGenerator {
  public generate(variables: MonsterVariables): Monster {
    const monster = new Monster();

    monster.statistics = new Statistic(
      'Blue',
      'Too tall',
      'Chinese food',
      'Riding',
      ''
    );

    monster.biography = new Biography(
      'Dani',
      'Not really sure what to put here as most things I think of would be in Stats? LOL',
      new Date('1968-07-20'),
      location
    );


    monster.biography.placeOfBirth = this.getRandomLocation(variables.locations);


    monster.picture = this.getRandomPicture(variables.pictures);

    return monster;
  }

  private getRandomLocation(locations: Array<LocationInfo>): LocationInfo {
    const randomIndex = Math.floor((Math.random() * locations.length - 1) + 1);
    return locations[randomIndex];
  }

  private getRandomPicture(pictures: Array<Picture>): Picture {
    const randomIndex = Math.floor((Math.random() * pictures.length - 1) + 1);
    return pictures[randomIndex];
  }
}
