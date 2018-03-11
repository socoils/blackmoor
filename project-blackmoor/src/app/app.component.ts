import { Component, OnInit } from '@angular/core';
import { CharacterGenerator } from '../shared/character-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public constructor(private monsterGeneratorService: CharacterGenerator) {}

  public ngOnInit(): void {
    this.monsterGeneratorService.generate();
  }
}
