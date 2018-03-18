import { Component, Input } from '@angular/core';
import { Picture } from './picture.model';

@Component({
  selector: 'app-picture-component',
  templateUrl: './app-picture.component.html'
})
export class PictureComponent {
  @Input() public pic: Picture;

  public constructor() {}
}
