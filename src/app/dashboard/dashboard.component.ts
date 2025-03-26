import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StageSelectComponent } from '../stage-select/stage-select.component'


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, StageSelectComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  playerInfo: any = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
      const player = JSON.parse(localStorage.getItem('player') || 'null');

      this.playerInfo = player;
  }
}