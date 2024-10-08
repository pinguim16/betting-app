import { MenubarModule } from 'primeng/menubar';
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [MenubarModule, RouterModule],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Apostas', routerLink: ['/bets'] },
      { label: 'Criar Aposta', routerLink: ['/bets/create'] },
      // Adicione mais itens de menu conforme necessário
    ];
  }
}