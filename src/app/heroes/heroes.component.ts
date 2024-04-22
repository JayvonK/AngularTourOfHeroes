import { Component } from '@angular/core';
import { IHero } from '../HeroInterface';
import { HEROES } from '../mock-heroes';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: IHero;
  onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }
}
