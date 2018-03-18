import { LocationInfo } from "./location.model";

export class Biography {
  public name: string;
  public description: string;
  public dob: Date;
  public placeOfBirth: LocationInfo;
  public ref: string;

  public getAge(): number {
    var now = new Date();
    var ageDiff = now.getFullYear() - this.dob.getFullYear();
    var m = now.getMonth() - this.dob.getMonth();
    if (m < 0 || (m == 0 && now.getUTCDate() < this.dob.getUTCDate())) {
      ageDiff--;
    }
    return Math.abs(ageDiff);
  }
  public constructor(name, description, dob, placeOfBirth) {
    this.name = name;
    this.description = description;
    this.dob = dob;
    this.placeOfBirth = placeOfBirth;
    if (this.ref == null) {
      this.ref = "";
    }
  }
}
