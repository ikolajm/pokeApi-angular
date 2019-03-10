import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PokeApi';
  _search = '';
  results = <any>[];
  base = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) {}

  onType(value) {
    this._search = value;
  }

  submit() {
    this.results = [];
    this.http.get(`${this.base}/${this._search}`).subscribe(pokemon => {
      console.log(pokemon);
      this.results = pokemon;
    })
  }

}
