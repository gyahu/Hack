import { Component }       from 'angular2/core';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu.component';

@Component({
  selector: 'my-app',
  template: `
    <app-menu>Loading menu...</app-menu>
    <app-home>Loading home...</app-home>
  `,
  directives: [HomeComponent, MenuComponent],
})
export class AppComponent {
  title = 'Tour of Heroes';
}