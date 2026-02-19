import { Routes } from '@angular/router';
import {AllHeroes} from './components/all-heroes/all-heroes';
import {HeroDetail} from './components/hero-detail/hero-detail';

export const routes: Routes = [
  { path : '', component : AllHeroes },
  { path : '/hero', component : HeroDetail }
];
