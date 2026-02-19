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
    this.heroes.push({name : 'Hulk'});
    this.heroes.push({name : 'Batman'});
    this.heroes.push({name : 'Buffy'});
  }
}
