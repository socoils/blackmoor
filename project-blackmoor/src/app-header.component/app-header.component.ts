import { Component } from '@angular/core';

@Component({
  templateUrl: './app-header.component.html',
  selector: 'app-header',
  styleUrls: ['./app-header.component.css']
})
export class HeaderComponent {
  public jquery: any;
  public $: any;

  public scroll(): void {}
}
