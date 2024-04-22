import { Component, Input } from '@angular/core';
import { IHero } from '../HeroInterface';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero? : IHero;
}
