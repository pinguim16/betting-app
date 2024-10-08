import { Component, OnInit } from '@angular/core';
import { CompetitionService } from '../../services/competition.service';
import { Competition } from '../../bean/bet.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CompetitionListComponent implements OnInit {
  competitions: Competition[] = [];

  constructor(private competitionService: CompetitionService) {}

  ngOnInit(): void {
    this.loadCompetitions();
  }

  loadCompetitions(): void {
    this.competitionService.getCompetitions().subscribe((data) => {
      this.competitions = data;
    });
  }
}
