import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
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

  totalVacancies = 40;
  reservedPercentage = 0.1;
  reservedCount = Math.ceil(this.totalVacancies * this.reservedPercentage);

  vacancies = Array(this.totalVacancies).fill('available');
  selectedVacancy = signal<number | null>(null);

  vacancySelected = computed(() => this.selectedVacancy());

  ngOnInit(): void {
    this.initializeReservedVacancies();
    //this.openDialog();
  }

  initializeReservedVacancies(): void {
    for (let i = 0; i < this.reservedCount; i++) {
      this.vacancies[i] = 'reserved';
    }
  }

  getIconColor(status: string): string {
    switch (status) {
      case 'available':
        return 'green';
      case 'occupied':
        return 'red';
      case 'reserved':
        return 'blue';
      case 'maintenance':
        return 'orange';
      default:
        return 'grey';
    }
  }

  onVacancyClick(event: MouseEvent, index: number): void {
    const trigger = event.target as HTMLElement;
    const menuTrigger = trigger
      .closest('.grid-item')
      ?.querySelector('[matMenuTriggerFor]') as unknown as MatMenuTrigger;
    if (menuTrigger) {
      menuTrigger.openMenu();
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
