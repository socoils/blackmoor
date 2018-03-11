import { Injectable } from '@angular/core';
import { CharacterGenerator } from '../shared/character-generator.service';

@Injectable()
export class MonsterGeneratorService extends CharacterGenerator {
  public generate(): void {
    const x = 1;
  }
}
