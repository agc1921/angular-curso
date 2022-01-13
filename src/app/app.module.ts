import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.modulo';
import { contadorComponent } from './contador/contador.component';
import { contadorModule } from './contador/contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    contadorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
