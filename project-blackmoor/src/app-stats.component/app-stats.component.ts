import { Component, Input } from "@angular/core";
import { Statistic } from "./stats.model";

@Component({
    selector: 'app-stats-component',
    templateUrl: './app-stats.component.html' 
})
export class StatsComponent {
    @Input() statistics : Statistic;
}

    