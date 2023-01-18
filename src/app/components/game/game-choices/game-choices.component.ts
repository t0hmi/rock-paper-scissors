import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-choices',
  templateUrl: './game-choices.component.html',
  styleUrls: ['./game-choices.component.scss']
})
export class GameChoicesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  play(id: number): void {
    this.router.navigate(['/', 'play', id]);
  }
}
