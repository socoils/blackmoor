import { Component, Input } from "@angular/core";

@Component({
    selector: "app-progress-bar",
    templateUrl: "./app-progress-bar.component.html"
})
export class ProgressBarComponent{
    @Input() public percentage: number;
}
