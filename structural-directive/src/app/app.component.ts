import { Component } from '@angular/core';
import { Hero, heroes } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'structural-directive';
  heroes = heroes;
  hero = heroes[0];

  showSad = true;
  condition = false;

  logs: string[] = [];
  status = 'ready';

  trackById(index: number, hero: Hero): number { return hero.id; }
}
