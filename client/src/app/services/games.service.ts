import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from '../models/Game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  getGames() {
    return this.http.get(`${this.URI}/games`);
  }

  getGame(id: string) {
    return this.http.get(`${this.URI}/games/${id}`);
  }

  saveGame(game: Game): Observable<Game> {
    return this.http.post(`${this.URI}/games`, game);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.URI}/games/${id}`);
  }

  updateGame(id: string|number, updatedGame: Game): Observable<Game> {
    return this.http.put(`${this.URI}/games/${id}`, updatedGame);
  }

}