import { Monster } from '../monster-generator/monster-model';

export interface ICharacterGenerator {
  generate(): Monster;
}
