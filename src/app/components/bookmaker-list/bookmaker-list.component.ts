import { Component, OnInit } from '@angular/core';
import { BookmakerService } from '../../services/bookmaker.service';
import { Bookmaker } from '../../bean/bet.model';

@Component({
  selector: 'app-bookmaker-list',
  templateUrl: './bookmaker-list.component.html',
  styleUrls: ['./bookmaker-list.component.css'],
})
export class BookmakerListComponent implements OnInit {
  bookmakers: Bookmaker[] = [];

  constructor(private bookmakerService: BookmakerService) {}

  ngOnInit(): void {
    this.loadBookmakers();
  }

  loadBookmakers(): void {
    this.bookmakerService.getBookmakers().subscribe((data) => {
      this.bookmakers = data;
    });
  }
}
