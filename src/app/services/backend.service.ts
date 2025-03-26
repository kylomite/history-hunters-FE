import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = 'http://localhost:8080/'; // Your backend URL

  private http!: HttpClient;  // <-- Lazy inject HttpClient to prevent circular DI

  constructor(private injector: Injector) {}

  // Lazy injection to avoid circular dependency
  private get httpClient(): HttpClient {
    if (!this.http) {
      this.http = this.injector.get(HttpClient);
    }
    return this.http;
  }

  // Players
  getPlayerById(playerId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}players/${playerId}`);
  }

  getAllPlayers(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}players`);
  }

  createPlayer(player: { email: string; password_digest: string; avatar: string }): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}players/`, player);
  }

  updatePlayer(playerId: number, player: { email?: string; password_digest?: string; avatar?: string }): Observable<any> {
    return this.httpClient.patch<any>(`${this.baseUrl}players/${playerId}`, player);
  }

  // Authentication
  authenticatePlayer(email: string, password: string): Observable<any> {
    const payload = { 
      email, 
      password_digest: password 
    };
    return this.httpClient.post<any>(`${this.baseUrl}players/authenticate`, payload);
  }

  // Stages

  getAllStages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}stages`);
  }

  getStageById(stageId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}stages/${stageId}`);
  }

  // Player_Sessions

  createPlayerSession(session: { player_id: number; stage_id: number; lives: number }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}players/${session.player_id}/player_sessions`, session);
  }

  getPlayerSessionById(playerId: number, sessionId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}players/${playerId}/player_sessions/${sessionId}`);
  }

  updatePlayerSession(playerId: number, sessionId: number, session: { lives?: number }): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl}players/${playerId}/player_sessions/${sessionId}`, session);
  }

  deletePlayerSession(playerId: number, sessionId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}players/${playerId}/player_sessions/${sessionId}`);
  }

  // Questions

  createQuestion(playerId: number, sessionId: number, question: { text: string }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}players/${playerId}/player_sessions/${sessionId}/questions`, question);
  }

  getQuestionById(playerId: number, sessionId: number, questionId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}players/${playerId}/player_sessions/${sessionId}/questions/${questionId}`);
  }

  // Answers

  createAnswer(playerId: number, sessionId: number, answer: { text: string; correct: boolean }): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}players/${playerId}/player_sessions/${sessionId}/answers`, answer);
  }

  getAllAnswers(playerId: number, sessionId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}players/${playerId}/player_sessions/${sessionId}/answers`);
  }

  getAnswerById(playerId: number, sessionId: number, answerId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}players/${playerId}/player_sessions/${sessionId}/answers/${answerId}`);
  }
}