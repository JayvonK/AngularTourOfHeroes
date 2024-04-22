import { Component } from '@angular/core';
import { IHero } from '../HeroInterface';
import { HEROES } from '../mock-heroes';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {
  heroes = HEROES
}
