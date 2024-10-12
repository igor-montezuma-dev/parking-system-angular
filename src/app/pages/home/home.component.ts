import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ResumeComponent } from '../../components/resume/resume.component';
import VacancyListComponent from '../../components/vacancy-list/vacancy-list.component';
import { parkingSpotResponse, ParkinSpot } from '../../core/model/vacancy';
import { VacancyService } from '../../shared/services/vacancy/vacancy.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, VacancyListComponent, ResumeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent implements OnInit {
  private parkingSpotService: VacancyService = inject(VacancyService);

  public parkingSpots: ParkinSpot[] = [];

  public totalVacancies!: number;
  public totalAvailable!: number;
  public totalOccupied!: number;
  public totalInactive!: number;

  ngOnInit(): void {
    this.getAllVacancies();
  }

  private getAllVacancies(): void {
    this.parkingSpotService.getAllVacancies().subscribe({
      next: (response: parkingSpotResponse) => {
        this.parkingSpots = response.parkingSpots;
        this.totalAvailable = response.totalAvailable;
        this.totalInactive = response.totalInactive;
        this.totalOccupied = response.totalOccupied;
        this.totalVacancies = response.totalVacancies;

      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }

  private getVacancyById(id: number): void {
    this.parkingSpotService.getVacancyById(id).subscribe({
      next: (response: ParkinSpot) => {
        console.log(response);
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
}
