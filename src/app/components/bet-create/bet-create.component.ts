import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BetService } from '../../services/bet.service';
import { Bet, Tipster, Bookmaker, Category, Competition, Sport } from '../../bean/bet.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SportService } from '../../services/sport.service';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-bet-create',
  templateUrl: './bet-create.component.html',
  styleUrls: ['./bet-create.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    ButtonModule,
    CardModule,
  ],
})
export class BetCreateComponent implements OnInit {
  bet: Bet = {
    id: 0,
    date: new Date(),
    odds: 0,
    stake: 0,
    stakeType: '',
    tipster: null,
    bookmaker: null,
    category: null,
    competition: null,
    label: '',
    sport: null
  };

  stakeTypes: { label: string; value: string }[] = [
    { label: 'Unidade', value: 'unit' },
    { label: 'Porcentagem', value: 'percentage' },
  ];

  tipsters: Tipster[] = [];
  bookmakers: Bookmaker[] = [];
  categories: Category[] = [];
  competitions: Competition[] = [];
  sports: Sport[] = [];

  constructor(
    private betService: BetService,
    private sportService: SportService,
    private competitionService: CompetitionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadDropdownOptions();
  }

  loadDropdownOptions(): void {
    // Carregar as opções dos dropdowns
    this.tipsters = [
      { id: 1, name: 'Tipster A' },
      { id: 2, name: 'Tipster B' },
    ];

    this.bookmakers = [
      { id: 1, name: 'Bet365' },
      { id: 2, name: 'Betfair' },
    ];

    this.categories = [
      { id: 1, name: 'Futebol', sport: null },
      { id: 2, name: 'Basquete', sport: null },
    ];

    this.competitions = [
      { id: 1, name: 'Premier League' },
      { id: 2, name: 'NBA', },
    ];

    this.sportService.getSports().subscribe(
      (data) => {
        this.sports = data;
      },
      (error) => {
        console.error('Erro ao carregar os esportes:', error);
      });
    
      this.competitionService.getCompetitions().subscribe((data) => {
        this.competitions = data;
      });  

  }

  createBet(): void {
    this.betService.createBet(this.bet).subscribe(() => {
      this.router.navigate(['/bets']);
    });
  }

  goBack(): void {
    this.router.navigate(['/bets']);
  }
}
