import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private scoreSubject: BehaviorSubject<number>;
  private score$: Observable<number>;

  constructor() { 
    this.scoreSubject = new BehaviorSubject<number>(0);
    this.score$ = this.scoreSubject.asObservable(); 
  }

  getScore(): Observable<number> {
    return this.score$;
  }

  incrementScore(): void {
    this.scoreSubject.next(this.scoreSubject.value + 1);
  }
}
