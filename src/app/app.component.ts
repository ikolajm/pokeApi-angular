import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PokeApi';
  results = <any>[];
  base = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) {}

  submit(search) {
    this.results = [];
    this.http.get(`${this.base}/${search}`).subscribe(pokemon => {
      console.log(pokemon);
      this.results = pokemon;
    })
  }

}
