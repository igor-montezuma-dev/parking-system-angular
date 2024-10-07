import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ResumeComponent } from '../../components/resume/resume.component';
import VacancyListComponent from '../../components/vacancy-list/vacancy-list.component';
import { parkingSpotResponse, parkinSpot } from '../../core/model/vacancy';
import { VacancyService } from '../../shared/services/vacancy.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, VacancyListComponent, ResumeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export default class HomeComponent implements OnInit {
  private parkingSpotService: VacancyService = inject(VacancyService);

  public parkingSpots: parkinSpot[] = [];

  ngOnInit(): void {
    this.getAllVacancies();
  }

  private getAllVacancies(): void {
    this.parkingSpotService.getAllVacancies().subscribe({
      next: (response: parkingSpotResponse) => {
        this.parkingSpots = response.parkingSpots;
      },
      error: (error: any) => {
        console.error(error);
      },
    });
  }
}
