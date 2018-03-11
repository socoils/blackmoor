import { Component } from "@angular/core";
import { Biography } from "./biography-model";

@Component({
  selector: "app-bio-component",
  templateUrl: "./app-bio-component.html"
})
export class BioComponent {
  public bio: Biography;

  public constructor() {
    this.bio = new Biography();

    this.bio.name = "Soph";
  }
}
