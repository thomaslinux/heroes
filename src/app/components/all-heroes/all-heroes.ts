import { Component } from '@angular/core';
import {JsonPipe} from '@angular/common';
import {RouterLink} from '@angular/router';

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
  public heroes : any[];

  constructor() {
    this.heroes = [];
  }

  public async addHeroes() {
    // this.heroes.push({id : 1, name : 'Hulk', image : 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/332-hulk.jpg'});
    // this.heroes.push({id : 2, name : 'Batman', image : 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/71-batman-ii.jpg'});
    // this.heroes.push({id : 3, name : 'Buffy', image : 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/140-buffy.jpg'});
    this.heroes = await callApi("https://akabab.github.io/superhero-api/api/all.json");
    console.log(this.heroes);
  }
}

async function callApi(url: string) {
  let response = await fetch(url);

  if (response.ok) {
    return response.json();
  }
}
