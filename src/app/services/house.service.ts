import { Injectable } from '@angular/core';
import { CHOICES, GameStatus } from '../shared/types';
import { PlayerService } from './player.service';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  choices = CHOICES;

  constructor(private playerService: PlayerService) { }

  getChoice(): number {
    const keys = Object.keys(this.choices);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return randomIndex;
  }

  getStatus(playerChoice: number, houseChoice: number): GameStatus {
    switch (playerChoice) {
      case 0:
        if(houseChoice === 0) return 'DRAW';
        if(houseChoice === 1) return 'LOOSE';
        if(houseChoice === 2){
          this.playerService.incrementScore();
          return 'WIN'
        };
        break;
      case 1:
        if(houseChoice === 0) {
          this.playerService.incrementScore();
          return 'WIN'
        };
        if(houseChoice === 1) return 'DRAW';
        if(houseChoice === 2) return 'LOOSE';
        break;
      case 2:
        if(houseChoice === 0) return 'LOOSE';
        if(houseChoice === 1) {
          this.playerService.incrementScore();
          return 'WIN'
        };
        if(houseChoice === 2) return 'DRAW';
        break;
      }
      return 'DRAW';
  }
}
