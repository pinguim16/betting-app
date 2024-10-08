import { Routes } from '@angular/router';
import { BetListComponent } from './components/bet-list/bet-list.component';
import { BetDetailComponent } from './components/bet-detail/bet-detail.component';
import { BetCreateComponent } from './components/bet-create/bet-create.component';

export const routes: Routes = [
  { path: '', redirectTo: '/bets', pathMatch: 'full' },
  { path: 'bets', component: BetListComponent },
  { path: 'bets/create', component: BetCreateComponent },
  { path: 'bets/:id', component: BetDetailComponent },
  // Outras rotas
];
