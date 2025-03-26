import { Component, OnInit, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-stage-select',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './stage-select.component.html',
  styleUrls: ['./stage-select.component.css']
})
export class StageSelectComponent implements OnInit {
  @Input() playerScore: number = 0;  // Input property to receive player's score
  stages: any[] = [];

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.backendService.getAllStages().subscribe({
      next: (stages) => {
        this.stages = stages;
      },
      error: (error) => {
        console.error('Error loading stages', error);
      }
    });
  }

  // Check if the player's score meets the threshold to access a stage
  isStageAccessible(stage: any): boolean {
    const requiredScore = (parseInt(stage.id.toString() + '00', 10)) - 100;
    return this.playerScore >= requiredScore;
  }
}