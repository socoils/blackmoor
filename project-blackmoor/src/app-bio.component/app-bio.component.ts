import { Component, Input } from '@angular/core';
import { Biography } from './biography.model';

@Component({
  selector: 'app-bio-component',
  templateUrl: './app-bio.component.html'
})
export class BioComponent {
  @Input() biography : Biography;
}
