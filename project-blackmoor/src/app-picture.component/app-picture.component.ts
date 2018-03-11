import { Component } from '@angular/core';
import { Picture } from './picture.model';

@Component({
  selector: 'app-picture-component',
  templateUrl: './app-picture.component.html'
})
export class PictureComponent {
  public pic: Picture;

  public constructor() {
    this.pic = new Picture();
    this.pic.alt = 'alternate text';
    this.pic.href = '.\\assets\\images\\monsters\\scorpion\\scorpion1.GIF';
  }
}
