import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Game } from '../models/gameModel';
import { StatisticsService } from './statistics.service';



@Injectable()
export class GameService {
  gameData: Array<Game>;
  dataChange:  ReplaySubject<any>;
  gamesUrl = 'https://any.com/games';

  constructor(private http: HttpClient, private statisticsService: StatisticsService) {
    this.dataChange  = new ReplaySubject();
  }

  getGames() {
    this.makeResponse()
      .subscribe((games: Array<Game>) => {
        this.handleGameData(games);
      });
  }

  makeResponse(): Observable<any> {
    return this.http.get(this.gamesUrl);
  }
  handleGameData(games) {
    this.gameData = games;
    this.doNext(games);
    this.statisticsService.send();
  }

  doNext(value) {
    this.dataChange.next(value);
  }

}
