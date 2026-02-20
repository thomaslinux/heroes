import {Injectable} from '@angular/core';
import {Hero} from '../models/hero';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroApi {

  private readonly BASE_URL: string = "https://akabab.github.io/superhero-api/api"
  public heroes: Hero[]; // Array<Hero>

  constructor(private http: HttpClient) {
    this.heroes = [];
  }

  public findAllHeroes() {
    this.http.get<Hero[]>(`${this.BASE_URL}/all.json`).subscribe(
      ((heroes: Hero[]) => this.heroes = heroes)
    )
    return this.heroes;
  }

  public findHeroById(id: number): Observable<Hero> {
    // return this.http.get<Hero>(`${this.BASE_URL}/id/${id}.json`)
    return this.heroes.find(
      (hero: Hero) => hero.id = id
    )
  }
}
