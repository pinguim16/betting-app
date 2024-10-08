import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sport } from  '../bean/bet.model';

@Injectable({
  providedIn: 'root',
})
export class SportService {
  private apiUrl = 'http://localhost:8080/api/sports';

  constructor(private http: HttpClient) {}

  getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>(this.apiUrl);
  }

  getSport(id: number): Observable<Sport> {
    return this.http.get<Sport>(`${this.apiUrl}/${id}`);
  }

  createSport(sport: Sport): Observable<Sport> {
    return this.http.post<Sport>(this.apiUrl, sport);
  }

  updateSport(id: number, sport: Sport): Observable<Sport> {
    return this.http.put<Sport>(`${this.apiUrl}/${id}`, sport);
  }

  deleteSport(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
