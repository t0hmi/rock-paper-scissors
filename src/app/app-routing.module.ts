import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameChoicesComponent } from './components/game/game-choices/game-choices.component';
import { GamePlayComponent } from './components/game/game-play/game-play.component';

const routes: Routes = [
  { path: '', component: GameChoicesComponent  },
  { path: 'play/:choice', component: GamePlayComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
