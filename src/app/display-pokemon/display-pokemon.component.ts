import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-pokemon',
  templateUrl: './display-pokemon.component.html',
  styleUrls: ['./display-pokemon.component.css']
})
export class DisplayPokemonComponent implements OnInit {
  _pokemon = {};

  @Input() set pokemon(pokemon) {
    this._pokemon = pokemon;
  }

  get pokemon() {
    return this._pokemon
  }
 
  constructor() { }

  ngOnInit() {
  }

}
