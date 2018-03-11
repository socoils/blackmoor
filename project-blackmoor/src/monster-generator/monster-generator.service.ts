import { Injectable } from '@angular/core';
import { Monster } from './monster-model';
import { ICharacterGenerator } from '../shared/character-generator.service.interface';
import { Statistic } from '../app-stats.component/stats.model';
import { Biography } from '../app-bio.component/biography.model';
import { LocationInfo } from '../app-bio.component/location.model';

@Injectable()
export class MonsterGeneratorService implements ICharacterGenerator {
  public static readonly MIN_IMAGES = 1;
  public static readonly MAX_IMAGES = 6;

  public generate(): Monster {
    const monster = new Monster();

    const imageNum =
      Math.floor(Math.random() * MonsterGeneratorService.MAX_IMAGES) +
      MonsterGeneratorService.MIN_IMAGES;

    monster.picture.href = '.\\assets\\images\\monsters\\scorpion\\scorpion' + imageNum + '.GIF';
    monster.picture.alt = 'scorpion';

    monster.statistics = new Statistic('Blue','Too tall','Chinese food','Riding','');

    const location = new LocationInfo('Victoriaville', 'Québec', 'Canada', 'https://en.wikipedia.org/wiki/Victoriaville');

    monster.biography = new Biography('Dani', 'Not really sure what to put here as most things I think of would be in Stats? LOL', new Date('1968-07-20'),location);

    return monster;
  }
}
