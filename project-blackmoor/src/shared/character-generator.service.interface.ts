import { Monster } from '../monster-generator/monster-model';
import { MonsterVariables } from '../monster-generator/monster-variables-model';

export interface ICharacterGenerator {
  generate(variables: MonsterVariables): Monster;
}
