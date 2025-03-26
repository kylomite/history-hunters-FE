import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BackendService } from './backend.service';

describe('BackendService', () => {
  let service: BackendService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BackendService]
    });
    service = TestBed.inject(BackendService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Player Session Endpoints', () => {
    const mockSession = { player_id: 1, stage_id: 1, lives: 3 };
    const mockPlayerId = 1;
    const mockSessionId = 1;

    it('should create a player session', () => {
      service.createPlayerSession(mockSession).subscribe(session => {
        expect(session.player_id).toBe(1);
        expect(session.lives).toBe(3);
      });

      const req = httpMock.expectOne(`http://localhost:4040/players/${mockPlayerId}/player_sessions`);
      expect(req.request.method).toBe('POST');
      req.flush(mockSession);
    });

    it('should fetch a player session by ID', () => {
      service.getPlayerSessionById(mockPlayerId, mockSessionId).subscribe(session => {
        expect(session.player_id).toBe(1);
        expect(session.lives).toBe(3);
      });

      const req = httpMock.expectOne(`http://localhost:4040/players/${mockPlayerId}/player_sessions/${mockSessionId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockSession);
    });

    it('should update a player session', () => {
      const updatedSession = { lives: 2 };

      service.updatePlayerSession(mockPlayerId, mockSessionId, updatedSession).subscribe(session => {
        expect(session.lives).toBe(2);
      });

      const req = httpMock.expectOne(`http://localhost:4040/players/${mockPlayerId}/player_sessions/${mockSessionId}`);
      expect(req.request.method).toBe('PATCH');
      req.flush(updatedSession);
    });

    it('should delete a player session', () => {
      service.deletePlayerSession(mockPlayerId, mockSessionId).subscribe(response => {
        expect(response).toBeNull();
      });

      const req = httpMock.expectOne(`http://localhost:4040/players/${mockPlayerId}/player_sessions/${mockSessionId}`);
      expect(req.request.method).toBe('DELETE');
      req.flush(null);
    });
  });

  describe('Question Endpoints', () => {
    const mockQuestion = { text: 'What is 2 + 2?' };
    const mockPlayerId = 1;
    const mockSessionId = 1;
    const mockQuestionId = 1;

    it('should create a question', () => {
      service.createQuestion(mockPlayerId, mockSessionId, mockQuestion).subscribe(question => {
        expect(question.text).toBe('What is 2 + 2?');
      });

      const req = httpMock.expectOne(`http://localhost:4040/players/${mockPlayerId}/player_sessions/${mockSessionId}/questions`);
      expect(req.request.method).toBe('POST');
      req.flush(mockQuestion);
    });

    it('should fetch a question by ID', () => {
      service.getQuestionById(mockPlayerId, mockSessionId, mockQuestionId).subscribe(question => {
        expect(question.text).toBe('What is 2 + 2?');
      });

      const req = httpMock.expectOne(`http://localhost:4040/players/${mockPlayerId}/player_sessions/${mockSessionId}/questions/${mockQuestionId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockQuestion);
    });
  });

  describe('Answer Endpoints', () => {
    const mockAnswer = { text: '4', correct: true };
    const mockPlayerId = 1;
    const mockSessionId = 1;
    const mockAnswerId = 1;

    it('should create an answer', () => {
      service.createAnswer(mockPlayerId, mockSessionId, mockAnswer).subscribe(answer => {
        expect(answer.text).toBe('4');
        expect(answer.correct).toBe(true);
      });

      const req = httpMock.expectOne(`http://localhost:4040/players/${mockPlayerId}/player_sessions/${mockSessionId}/answers`);
      expect(req.request.method).toBe('POST');
      req.flush(mockAnswer);
    });

    it('should fetch an answer by ID', () => {
      service.getAnswerById(mockPlayerId, mockSessionId, mockAnswerId).subscribe(answer => {
        expect(answer.text).toBe('4');
      });

      const req = httpMock.expectOne(`http://localhost:4040/players/${mockPlayerId}/player_sessions/${mockSessionId}/answers/${mockAnswerId}`);
      expect(req.request.method).toBe('GET');
      req.flush(mockAnswer);
    });
  });
});