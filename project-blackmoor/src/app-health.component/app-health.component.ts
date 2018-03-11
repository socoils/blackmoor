import { Component } from "@angular/core";

@Component({
  selector: "app-health",
  templateUrl: "./app-health.component.html"
})
export class HealthComponent {
  public value = 2;
  public min = 0;
  public max = 4;
  public increase(): void{
      if (this.value == this.max){
        this.value = 0;
      }
      this.value += 1;
  }

  public getHealthPercentage(): any {
    return this.value / this.max * 100;
  }
}
