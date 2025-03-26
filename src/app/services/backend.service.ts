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

  // GET one player

  // GET all players

  // POST one player

  // PATCH one player

  // Stages

  // GET one stage

  // GET all stages

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