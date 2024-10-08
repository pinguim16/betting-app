import { Component, OnInit } from '@angular/core';
import { BetService } from '../../services/bet.service';
import { Bet } from '../../bean/bet.model';
import { Router } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bet-list',
  templateUrl: './bet-list.component.html',
  styleUrls: ['./bet-list.component.css'],
  standalone: true,
  imports: [CommonModule, TableModule, ButtonModule],
})
export class BetListComponent implements OnInit {
  bets: Bet[] = [];

  constructor(private betService: BetService, private router: Router) {}

  ngOnInit(): void {
    this.loadBets();
  }

  loadBets(): void {
    this.betService.getBets().subscribe((data) => {
      this.bets = data;
    });
  }

  viewBet(betId: number): void {
    this.router.navigate(['/bets', betId]);
  }
}
