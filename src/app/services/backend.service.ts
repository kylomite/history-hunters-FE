import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = 'http://localhost:4040/'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  // Players

  // GET one player by ID
  getPlayerById(playerId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}players/${playerId}`);
  }

  // GET all players
  getAllPlayers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}players`);
  }

  // POST one player
  createPlayer(player: { email: string; password_digest: string; avatar: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}players`, player);
  }

  // PATCH one player (update)
  updatePlayer(playerId: number, player: { email?: string; password_digest?: string; avatar?: string }): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}players/${playerId}`, player);
  }

  // Stages

  // GET all stages
  getAllStages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}stages`);
  }

  // GET stage by ID
  getStageById(stageId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}stages/${stageId}`);
  }

  // Player_Sessions

  // GET one player_session

  // PATCH one player_session

  // DELETE one player_session

  // Questions

  // POST one question

  // GET one question

  // Answers

  // POST one answer

  // GET all answers
}