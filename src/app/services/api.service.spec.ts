import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { ApiService } from './api.service';

interface Question {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

describe('ApiService', () => {
  let service: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // Test for easy questions
  it('should fetch easy questions and validate the structure', () => {
    service.getEasyQuestions().subscribe(response => {
      expect(response.results.length).toBe(10);

      response.results.forEach((question: Question) => {
        expect(question.type).toBeDefined();
        expect(question.difficulty).toBeDefined();
        expect(question.category).toBeDefined();
        expect(question.question).toBeDefined();
        expect(question.correct_answer).toBeDefined();
        expect(question.incorrect_answers).toBeDefined();
      });
    });

    const req = httpMock.expectOne('https://opentdb.com/api.php?amount=10&category=23&type=multiple&difficulty=easy');
    expect(req.request.method).toBe('GET');
    req.flush({
      response_code: 0,
      results: [
        { type: 'multiple', difficulty: 'easy', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'easy', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'easy', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'easy', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'easy', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'easy', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'easy', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'easy', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'easy', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'easy', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] }
      ]
    });
  });

  // Test for medium questions
  it('should fetch medium questions and validate the structure', () => {
    service.getMediumQuestions().subscribe(response => {
      expect(response.results.length).toBe(10);

      response.results.forEach((question: Question) => {
        expect(question.type).toBeDefined();
        expect(question.difficulty).toBeDefined();
        expect(question.category).toBeDefined();
        expect(question.question).toBeDefined();
        expect(question.correct_answer).toBeDefined();
        expect(question.incorrect_answers).toBeDefined();
      });
    });

    const req = httpMock.expectOne('https://opentdb.com/api.php?amount=10&category=23&type=multiple&difficulty=medium');
    expect(req.request.method).toBe('GET');
    req.flush({
      response_code: 0,
      results: [
        { type: 'multiple', difficulty: 'medium', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'medium', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'medium', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'medium', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'medium', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'medium', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'medium', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'medium', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'medium', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'medium', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] }
      ]
    });
  });

  // Test for hard questions
  it('should fetch hard questions and validate the structure', () => {
    service.getHardQuestions().subscribe(response => {
      expect(response.results.length).toBe(10);

      response.results.forEach((question: Question) => {
        expect(question.type).toBeDefined();
        expect(question.difficulty).toBeDefined();
        expect(question.category).toBeDefined();
        expect(question.question).toBeDefined();
        expect(question.correct_answer).toBeDefined();
        expect(question.incorrect_answers).toBeDefined();
      });
    });

    const req = httpMock.expectOne('https://opentdb.com/api.php?amount=10&category=23&type=multiple&difficulty=hard');
    expect(req.request.method).toBe('GET');
    req.flush({
      response_code: 0,
      results: [
        { type: 'multiple', difficulty: 'hard', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'hard', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'hard', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'hard', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'hard', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'hard', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'hard', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'hard', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'hard', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] },
        { type: 'multiple', difficulty: 'hard', category: 'History', question: '...', correct_answer: 'Australia', incorrect_answers: ['India', 'Canada', 'Brazil'] }
      ]
    });
  });

  afterEach(() => {
    httpMock.verify(); // Ensures no outstanding requests are pending
  });
});