import { NgModule } from "@angular/core";
import { ProgressBarComponent } from "./app-progress-bar.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [BrowserModule],
  declarations: [ProgressBarComponent],
  bootstrap: [ProgressBarComponent],
  exports: [ProgressBarComponent]
})
export class ProgressBarModule {}

