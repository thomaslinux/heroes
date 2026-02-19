import { Component } from '@angular/core';

@Component({
  selector: 'app-all-heroes',
  imports: [],
  templateUrl: './all-heroes.html',
  styleUrl: './all-heroes.css',
})
export class AllHeroes {
  public heroes : any[];


  constructor() {
    this.heroes = [{name : 'Hulk'}];
  }

  public addHeroes() {
    this.heroes.push({name : 'Hulk'});
    this.heroes.push({name : 'Batman'});
    this.heroes.push({name : 'Buffy'});
  }
}
