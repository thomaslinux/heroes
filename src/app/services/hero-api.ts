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
  }

  public findAllHeroes(){
    return this.http.get<Hero[]>(`${this.BASE_URL}/all.json`);
  }

  public findHeroById(id: number): Hero | undefined {
    return this.heroes.find((hero: Hero): boolean => hero.id == id);
  }
}
