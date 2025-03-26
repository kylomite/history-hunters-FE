import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://opentdb.com/api.php?amount=10&category=23&type=multiple';

  constructor(private http: HttpClient) {}

  // Fetch easy questions
  getEasyQuestions(): Observable<any> {
    const url = `${this.baseUrl}&difficulty=easy`;
    return this.http.get<any>(url);
  }

  // Fetch medium questions
  getMediumQuestions(): Observable<any> {
    const url = `${this.baseUrl}&difficulty=medium`;
    return this.http.get<any>(url);
  }

  // Fetch hard questions
  getHardQuestions(): Observable<any> {
    const url = `${this.baseUrl}&difficulty=hard`;
    return this.http.get<any>(url);
  }
}