import { Component, OnInit, Inject } from '@angular/core';
import { Monster } from '../monster-generator/monster-model';
import { ICharacterGenerator } from '../shared/character-generator.service.interface';
import { CHARACTER_GENERATOR } from '../shared/character-generator.injection-token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public monster: Monster;

  public constructor(
    @Inject(CHARACTER_GENERATOR)
    private monsterGeneratorService: ICharacterGenerator
  ) {}

  public ngOnInit(): void {
    this.generateNewMonster();
  }

  private generateNewMonster(): void {
    this.monster = this.monsterGeneratorService.generate();
    console.log("here");
  }
}
