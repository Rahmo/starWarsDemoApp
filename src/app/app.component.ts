import { Component } from '@angular/core';

import { INav } from './models';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
      <nav>
        <a *ngFor="let target of nav"
          [routerLink]="target.link">{{ target.name }}</a>
      </nav>
    </div>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  public nav: INav[] = [
    { link: '/', name: 'Home', exact: true },
    { link: '/catalog', name: 'Catalog', exact: true },
    { link: '/404', name: '404', exact: false },
  ];
}
