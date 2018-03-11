import { Injectable } from '@angular/core';
import { Monster } from './monster-model';
import { ICharacterGenerator } from '../shared/character-generator.service.interface';

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

    return monster;
  }
}
