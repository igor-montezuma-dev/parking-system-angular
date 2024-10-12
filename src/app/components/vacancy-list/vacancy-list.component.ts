import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  inject,
  Input,
  OnInit,
  signal,
} from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ParkinSpot } from '../../core/model/vacancy';
import { MaterialModule } from '../../material.module';
import { FillVacancyFormComponent } from '../../shared/fill-vacancy-form/fill-vacancy-form.component';
import { BehaviorSubjectService } from '../../shared/services/behavior-subject.service';
import { ParkingSpotBehaviorServiceService } from '../../shared/services/vacancy/parking-spot-behavior-service.service';
import { VacancyService } from '../../shared/services/vacancy/vacancy.service';
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

  private parkingSpotService: VacancyService = inject(VacancyService);
  private behaviorSubjectService = inject(BehaviorSubjectService);
  private parkingSpotBehaviorService = inject(
    ParkingSpotBehaviorServiceService
  );

  @Input() parkingSpots: ParkinSpot[] = [];
  //parkingSpots = input<parkinSpot[]>([]);

  parkinSpotData: any = {};

  selectedParkingSpot: ParkinSpot | null = null;

  spotId!: number;
  selectedVacancy = signal<number | null>(null);

  vacancySelected = computed(() => this.selectedVacancy());

  ngOnInit(): void {
    this.initializeReservedVacancies();

    this.getId();
    //this.openDialog();
  }

  initializeReservedVacancies(): void {
    this.parkingSpots;
  }

  getIconColor(status: string): string {
    switch (status) {
      case 'available':
        return 'green';
      case 'occupied':
        return 'grey';

      case 'inactive':
        return 'red';
      default:
        return 'grey';
    }
  }

  public getIconName(type: string): string {
    switch (type) {
      case 'occupied':
        return 'directions_car';
      case 'maintenance':
        return 'build';
      case 'available':
        return 'directions_car';
      case 'pcd':
        return 'accessible';
      case 'elderly':
        return 'elderly';
      default:
        return 'directions_car';
    }
  }

  onVacancyClick(event: MouseEvent, id: number): void {
    this.behaviorSubjectService.setId(id);
    const trigger = event.target as HTMLElement;
    if (trigger) {
      const gridItem = trigger.closest('.grid-item');
      if (gridItem) {
        const menuTrigger = gridItem.querySelector(
          '[matMenuTriggerFor]'
        ) as MatMenuTrigger | null;
        if (menuTrigger) {
          menuTrigger.openMenu();
        }
      }
    }
  }

  getId() {
    this.behaviorSubjectService.getId().subscribe({
      next: (id: any) => {
        this.spotId = id;
      },
    });
  }

  private getVacancyById(id: number): void {
    this.parkingSpotService.getVacancyById(id).subscribe({
      next: (response: ParkinSpot) => {
        this.parkinSpotData = response;
        this.parkingSpotBehaviorService.setData(response);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  openDetailsDialog(data: ParkinSpot): void {
    this.getId();
    this.getVacancyById(this.spotId);
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
