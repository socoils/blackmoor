import { Component } from "@angular/core";
import { Statistic } from "./stats.model";

@Component({
    selector: 'app-stats-component',
    templateUrl: './app-stats.component.html' 
})
export class StatsComponent {
    public statistics = new Statistic('Blue','Too tall','Loves to ride ... Soph');
}

    