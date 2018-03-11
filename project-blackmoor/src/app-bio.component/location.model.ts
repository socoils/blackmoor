export class LocationInfo {
  public city: string;
  public cityRef: string;
  public province: string;
  public provinceRef: string;
  public country: string;
  public countryRef: string;

  public constructor(city, province, country, cityRef) {
    this.city = city;
    this.cityRef = cityRef;
    this.province = province;
    this.country = country;
  }
}
