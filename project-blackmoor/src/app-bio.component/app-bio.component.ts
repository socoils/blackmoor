import { Component } from '@angular/core';
import { Biography } from './biography.model';

@Component({
  selector: 'app-bio-component',
  templateUrl: './app-bio.component.html'
})
export class BioComponent {
  public biography = new Biography();
  
  public constructor(){
    this.biography.name = 'Soph';
    this.biography.dob = new Date('1984-09-23');
    this.biography.placeOfBirth = 'Moncton';   
  }
  
}

