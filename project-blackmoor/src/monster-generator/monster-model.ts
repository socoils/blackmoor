import { Picture } from '../app-picture.component/picture.model';

export class Monster {
  public picture: Picture;

  public constructor() {
    this.picture = new Picture();
  }
}
