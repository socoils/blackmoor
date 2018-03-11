export class Biography {
  public name: string;
  public dob: Date;
  public placeOfBirth: string;
  
  public getAge(): number{
    var now = new Date();
    var ageDiff = now.getFullYear() - this.dob.getFullYear();
    var m = now.getMonth() - this.dob.getMonth();
    if (m < 0 || (m == 0 && now.getUTCDate() < this.dob.getUTCDate())) {
        ageDiff--;
    }
    return Math.abs(ageDiff); 
  }
}
