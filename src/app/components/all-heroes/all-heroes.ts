import { Component } from '@angular/core';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-all-heroes',
  imports: [
    JsonPipe
  ],
  templateUrl: './all-heroes.html',
  styleUrl: './all-heroes.css',
})
export class AllHeroes {
  public heroes : any[];

  constructor() {
    this.heroes = [];
  }

  public addHeroes() {
    this.heroes.push({name : 'Hulk', image : 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/332-hulk.jpg'});
    this.heroes.push({name : 'Batman', image : 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/71-batman-ii.jpg'});
    this.heroes.push({name : 'Buffy', image : 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/140-buffy.jpg'});
  }
}
