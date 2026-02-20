import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Hero} from '../../models/hero';
import {HeroApi} from '../../services/hero-api';

@Component({
  selector: 'app-hero-detail',
  imports: [],
  templateUrl: './hero-detail.html',
  styleUrl: './hero-detail.css',
})
export class HeroDetail {

  public id : string | null
  public hero : Hero | undefined

  constructor(private route: ActivatedRoute, private heroService : HeroApi) {

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.hero = this.heroService.findHeroById(+this.id);
    }
  }


}
