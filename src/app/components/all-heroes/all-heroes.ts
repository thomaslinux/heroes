import {Component} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import {Hero} from '../../models/hero';
import {HeroApi} from '../../services/hero-api';

@Component({
  selector: 'app-all-heroes',
  imports: [
    JsonPipe,
    RouterLink
  ],
  templateUrl: './all-heroes.html',
  styleUrl: './all-heroes.css',
})
export class AllHeroes {
  public heroes: Hero[];

  constructor(private heroService : HeroApi) {
    this.heroes = [];
  }

  public addHeroes() {
    this.heroes = this.heroService.findAllHeroes();
  }
}
