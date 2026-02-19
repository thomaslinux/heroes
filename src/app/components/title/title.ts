import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.css',
})
export class Title {

  public title : string;

  constructor() {
    this.title = "Super Heroes !"
  }

}
