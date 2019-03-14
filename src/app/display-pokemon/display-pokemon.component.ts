import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-pokemon',
  templateUrl: './display-pokemon.component.html',
  styleUrls: ['./display-pokemon.component.css']
})
export class DisplayPokemonComponent implements OnInit {
  // The property of "_pokemon" is initially an empty object
  _pokemon = {};

  // Here, we are setting our _pokemon data to the returned pokemon
  @Input() set pokemon(pokemon) {
    this._pokemon = pokemon;
  }

  // Here we are getting this change made by the @Input
  get pokemon() {
    return this._pokemon
  }
 
  constructor() { }

  ngOnInit() {
  }

}
