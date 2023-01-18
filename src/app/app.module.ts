import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { GameChoicesComponent } from './components/game/game-choices/game-choices.component';
import { RulesComponent } from './components/rules/rules.component';
import { GamePlayComponent } from './components/game/game-play/game-play.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GameChoicesComponent,
    RulesComponent,
    GamePlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
