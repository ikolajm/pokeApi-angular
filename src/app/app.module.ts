import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Necessary to use calls to services
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
// Necessary to view the Display Pokemon Component
import { DisplayPokemonComponent } from './display-pokemon/display-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayPokemonComponent
  ],
  imports: [
    BrowserModule,
    // Necessary to view the Display Pokemon Component
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
