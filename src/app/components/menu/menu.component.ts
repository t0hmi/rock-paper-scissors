import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input('possible-choices') choices = ['rock', 'paper', 'scissors']

  score$ : Observable<number> | null = null;

  constructor(private playerService: PlayerService) {
  }
  
  ngOnInit(): void {
    this.score$ = this.playerService.getScore();
  }

}
