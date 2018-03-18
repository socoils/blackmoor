import { Component } from '@angular/core';

@Component({
  templateUrl: './app-navigation.component.html',
  selector: 'app-navigation',
  styleUrls: ['./app-navigation.component.css']
})
export class NavigationComponent {
  public jquery: any;
  public $: any;

  public scroll(): void {}
}
