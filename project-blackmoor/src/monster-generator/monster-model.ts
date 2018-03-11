import { Picture } from '../app-picture.component/picture.model';
import { Statistic } from '../app-stats.component/stats.model';
import { Biography } from '../app-bio.component/biography.model';

export class Monster {
  public biography: Biography;
  public picture: Picture;
  public statistics : Statistic;

  public constructor() {
    this.picture = new Picture();
  }
}
