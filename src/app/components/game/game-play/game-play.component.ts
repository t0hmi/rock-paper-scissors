import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from 'src/app/services/house.service';
import { GameStatus } from 'src/app/shared/types';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.scss']
})
export class GamePlayComponent implements OnInit {

  id: string = '';
  isLoading = true;
  houseChoice: number = 0;
  gameStatus: GameStatus | null = null;

  constructor(private route: ActivatedRoute, private houseService: HouseService) {}

  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('choice') as string;
    await this.wait();
    this.isLoading = false;
    this.houseChoice = this.houseService.getChoice();
    this.gameStatus = this.houseService.getStatus(Number.parseInt(this.id), this.houseChoice); 
  }

  private async wait():Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 3000))
  }

}
