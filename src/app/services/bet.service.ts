import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bet } from '../bean/bet.model';

@Injectable({
  providedIn: 'root',
})
export class BetService {
  private apiUrl = 'http://localhost:8080/api/bets';

  constructor(private http: HttpClient) {}

  getBets(): Observable<Bet[]> {
    return this.http.get<Bet[]>(this.apiUrl);
  }

  getBet(id: number): Observable<Bet> {
    return this.http.get<Bet>(`${this.apiUrl}/${id}`);
  }

  createBet(bet: Bet): Observable<Bet> {
    return this.http.post<Bet>(this.apiUrl, bet);
  }

  updateBet(id: number, bet: Bet): Observable<Bet> {
    return this.http.put<Bet>(`${this.apiUrl}/${id}`, bet);
  }

  deleteBet(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
