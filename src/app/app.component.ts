import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Title able to be applied to app.component.html
  title = 'PokeApi';
  // The results of the fetch, initially blank
  results = <any>[];
  // The base url that all fetches are based off of when using the pokemon api
  base = 'https://pokeapi.co/api/v2/pokemon'

  // "private" means it is only able to be used on this component
  // We then are able to set an "alias" name when referring to HttpClient
  constructor(private http: HttpClient) {}

  // Submit function that takes a parameter of search
  submit(search) {
    // GET the url and fetch (subscribe) the data
    // The response is then set to the local parameter of "results" up above
    this.http.get(`${this.base}/${search}`).subscribe(pokemon => {
      this.results = pokemon;
    })
  }

}
