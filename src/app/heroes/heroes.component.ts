import { Component } from '@angular/core';
import { IHero } from '../HeroInterface';
import { HeroService } from '../hero.service';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  constructor(private heroService: HeroService){}

  getHeros(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeros();
  }

  heroes: IHero[] = [];
  selectedHero?: IHero;
  onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }
}
