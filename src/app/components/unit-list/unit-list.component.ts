// src/app/components/unit-list/unit-list.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Unit } from '../../bean/bet.model';
import { UnitService } from '../../services/unit.service';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html',
  styleUrls: ['./unit-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class UnitListComponent implements OnInit {
  units: Unit[] = [];

  constructor(private unitService: UnitService) {}

  ngOnInit(): void {
    this.loadUnits();
  }

  loadUnits(): void {
    this.unitService.getUnits().subscribe((data) => {
      this.units = data;
    });
  }
}
