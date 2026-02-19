import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AllHeroes} from './components/all-heroes/all-heroes';
import {Title} from './components/title/title';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AllHeroes, Title],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('heroes');
}
