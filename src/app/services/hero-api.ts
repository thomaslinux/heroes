import {Injectable} from '@angular/core';
import {Hero} from '../models/hero';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroApi {

  private readonly BASE_URL:string = "https://akabab.github.io/superhero-api/api"
  public heroes: Hero[]; // Array<Hero>

  constructor(private http : HttpClient) {
    this.heroes = [];
    this.heroes.push({id : 1, name : 'Hulk', image : 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/332-hulk.jpg'});
    this.heroes.push({id : 2, name : 'Batman', image : 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/71-batman-ii.jpg'});
    this.heroes.push({id : 3, name : 'Buffy', image : 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/140-buffy.jpg'});

  }

  public findAllHeroes(){
    return this.http.get<Hero[]>(`${this.BASE_URL}/all.json`);
  }

  public findHeroById(id: number): Hero | undefined {
    return this.heroes.find((hero: Hero): boolean => hero.id == id);
  }
}
