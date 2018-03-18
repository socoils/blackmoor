import { InjectionToken } from '@angular/core';
import { ICharacterGenerator } from './character-generator.service.interface';

export const CHARACTER_GENERATOR = new InjectionToken<ICharacterGenerator>(
  'character_generator'
);
