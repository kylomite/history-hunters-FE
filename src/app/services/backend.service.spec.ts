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
    // Ensure that there are no pending requests after each test
    httpMock.verify();
  });

  describe('Player Endpoints', () => {
    const mockPlayer = {
      email: 'test@example.com',
      password_digest: 'hashed_password',
      avatar: 'avatar_url'
    };

    const mockPlayers = [
      { id: 1, email: 'player1@example.com', password_digest: 'hashed_password1', avatar: 'avatar_url1' },
      { id: 2, email: 'player2@example.com', password_digest: 'hashed_password2', avatar: 'avatar_url2' }
    ];

    it('should fetch one player by ID', () => {
      service.getPlayerById(1).subscribe(player => {
        expect(player.id).toBe(1);
        expect(player.email).toBe('player1@example.com');
      });

      const req = httpMock.expectOne('http://localhost:4040/players/1');
      expect(req.request.method).toBe('GET');
      req.flush(mockPlayers[0]);
    });

    it('should fetch all players', () => {
      service.getAllPlayers().subscribe(players => {
        expect(players.length).toBe(2);
        expect(players[0].email).toBe('player1@example.com');
      });

      const req = httpMock.expectOne('http://localhost:4040/players');
      expect(req.request.method).toBe('GET');
      req.flush(mockPlayers);
    });

    it('should create a new player', () => {
      service.createPlayer(mockPlayer).subscribe(player => {
        expect(player.email).toBe('test@example.com');
        expect(player.password_digest).toBe('hashed_password');
      });

      const req = httpMock.expectOne('http://localhost:4040/players');
      expect(req.request.method).toBe('POST');
      expect(req.request.body).toEqual(mockPlayer);
      req.flush(mockPlayer);
    });

    it('should update a player', () => {
      const updatedPlayer = { ...mockPlayer, email: 'updated@example.com' };

      service.updatePlayer(1, updatedPlayer).subscribe(player => {
        expect(player.email).toBe('updated@example.com');
      });

      const req = httpMock.expectOne('http://localhost:4040/players/1');
      expect(req.request.method).toBe('PATCH');
      expect(req.request.body).toEqual(updatedPlayer);
      req.flush(updatedPlayer);
    });
  });

  describe('Stage Endpoints', () => {
  
    // Test for getting all stages
    it('should fetch all stages', () => {
      const mockStages = [
        { id: 1, title: 'Stage 1', background_img: 'bg1.jpg', difficulty: 1 },
        { id: 2, title: 'Stage 2', background_img: 'bg2.jpg', difficulty: 2 },
      ];
  
      service.getAllStages().subscribe(stages => {
        expect(stages.length).toBe(2);
        expect(stages).toEqual(mockStages);
      });
  
      const req = httpMock.expectOne('http://localhost:4040/stages');
      expect(req.request.method).toBe('GET');
      req.flush(mockStages); // Mock the response with mockStages
    });
  
    // Test for getting a stage by ID
    it('should fetch stage by ID', () => {
      const mockStage = { id: 1, title: 'Stage 1', background_img: 'bg1.jpg', difficulty: 1 };
  
      service.getStageById(1).subscribe(stage => {
        expect(stage).toEqual(mockStage);
      });
  
      const req = httpMock.expectOne('http://localhost:4040/stages/1');
      expect(req.request.method).toBe('GET');
      req.flush(mockStage); // Mock the response with mockStage
    });
  
    afterEach(() => {
      httpMock.verify(); // Ensure that no unmatched requests are made
    });
  });
});
