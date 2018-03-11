import { Component } from '@angular/core';
import { Biography } from './biography.model';
import { Location } from './biography.model';

@Component({
  selector: 'app-bio-component',
  templateUrl: './app-bio.component.html'
})
export class BioComponent {
  public biography = new Biography('Dani', new Date('1968-07-20'), new Location('Victoriaville', 'Québec', 'Canada', 'https://en.wikipedia.org/wiki/Victoriaville'));
}
