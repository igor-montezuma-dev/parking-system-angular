

import { CommonModule } from '@angular/common';
import { Component, computed, inject, Input, OnInit, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { parkinSpot } from '../../core/model/vacancy';
import { MaterialModule } from '../../material.module';
import { FillVacancyFormComponent } from '../../shared/fill-vacancy-form/fill-vacancy-form.component';
import VacancyDetailsDialogComponent from '../../shared/vacancy-details-dialog/vacancy-details-dialog.component';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule, MaterialModule, MatDialogModule],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.scss',
})
export default class VacancyListComponent implements OnInit {
  readonly dialog = inject(MatDialog);

  @Input() parkingSpots: parkinSpot[] = [];
  //parkingSpots = input<parkinSpot[]>([]);



  id!: number;
  selectedVacancy = signal<number | null>(null);

  vacancySelected = computed(() => this.selectedVacancy());

  ngOnInit(): void {
    this.initializeReservedVacancies();
    //this.openDialog();

  }

  initializeReservedVacancies(): void {
    this.parkingSpots

  }

  getIconColor(type: string): string {
    switch (type) {
      case 'normal':
        return 'green';
      case 'occupied':
        return 'red';
      case 'pcd':
        return 'blue';
      case 'elderly':
        return 'blue';
      case 'maintenance':
        return 'orange';
      default:
        return 'grey';
    }
  }

  onVacancyClick(event: MouseEvent, id: number): void {
    const trigger = event.target as HTMLElement;
    if (trigger) {
        const gridItem = trigger.closest('.grid-item');
        if (gridItem) {
            const menuTrigger = gridItem.querySelector('[matMenuTriggerFor]') as MatMenuTrigger | null;
            if (menuTrigger) {
                menuTrigger.openMenu();
            }
        }
    }
}


  openDetailsDialog(): void {
    this.dialog.open(VacancyDetailsDialogComponent, {
      width: '932px',
      height: '508px',
    });
  }

  openFillVacancyDialog(): void {
    this.dialog.open(FillVacancyFormComponent, {
      width: '932px',
      height: '600px',
    });
  }
}
