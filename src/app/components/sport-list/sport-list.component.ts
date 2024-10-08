import { Component, OnInit } from '@angular/core';
import { SportService } from '../../services/sport.service';
import { Sport } from '../../bean/bet.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sport-list',
  templateUrl: './sport-list.component.html',
  styleUrls: ['./sport-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SportListComponent implements OnInit {
  sports: Sport[] = [];

  constructor(private sportService: SportService) {}

  ngOnInit(): void {
    this.loadSports();
  }

  loadSports(): void {
    this.sportService.getSports().subscribe((data) => {
      this.sports = data;
    });
  }
}
