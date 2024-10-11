import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../../material.module';
import { ParkingSpotBehaviorServiceService } from '../services/vacancy/parking-spot-behavior-service.service';
import { VacancyService } from '../services/vacancy/vacancy.service';

@Component({
  selector: 'app-vacancy-details-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './vacancy-details-dialog.component.html',
  styleUrl: './vacancy-details-dialog.component.scss',
})
export default class VacancyDetailsDialogComponent
  implements OnInit, OnDestroy
{
  searchRegisterForm!: FormGroup;
  public fb: FormBuilder = inject(FormBuilder);
  private parkingSpotBehaviorService = inject(
    ParkingSpotBehaviorServiceService
  );
  private parkingSpotService: VacancyService = inject(VacancyService);

  data!: any;

  vacancyId!: number;
  vacancyNumber!: number;
  vacancyStatus!: string;
  vacancyType!: string;

  public snackBar: MatSnackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.searchRegisterForm = this.fb.group({
      licensePlate: ['', Validators.required],
      document: ['', Validators.required],
    });

    this.getParkingSpotData();
  }

  ngOnDestroy(): void {
    this.parkingSpotService.getAllVacancies().subscribe({
      next: (data: any) => {
        this.parkingSpotBehaviorService.setData(data);
      },
    })
  }

  public getParkingSpotData(): void {
    this.parkingSpotBehaviorService.getData().subscribe({
      next: (data: any) => {
        this.vacancyNumber = data.id;
        this.vacancyStatus = data.status;
        this.vacancyType = data.type;
        sessionStorage.setItem('vacancyNumber', data.id.toString());
      },
      error: (error: any) => {
        this.snackBar.open('Error getting parking spot data', 'Close', {
          duration: 2000,
        });
      },
    });
  }

  public updateVacancyStatus() {

    this.vacancyId = Number(sessionStorage.getItem('vacancyNumber'));
    console.log(this.vacancyId);

    this.data = {
      status: 'inactive',
    }

    this.parkingSpotService.updateVacancy(this.vacancyId, this.data).subscribe({
      next: (data: any) => {
        this.snackBar.open('Status atualizado com sucesso!', 'Fechar', {
          duration: 2000,
        });
      },
      error: (error: any) => {
        this.snackBar.open('Erro ao realizar alteração de status.', 'Fechar', {
          duration: 2000,
        });
      }
    });
  }
}
