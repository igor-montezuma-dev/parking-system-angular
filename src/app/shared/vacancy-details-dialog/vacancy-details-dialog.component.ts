import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-vacancy-details-dialog',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  templateUrl: './vacancy-details-dialog.component.html',
  styleUrl: './vacancy-details-dialog.component.scss'
})
export default  class VacancyDetailsDialogComponent implements OnInit {

  searchRegisterForm!: FormGroup;
  public fb: FormBuilder = inject(FormBuilder);

  public snackBar: MatSnackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.searchRegisterForm = this.fb.group({
      licensePlate: ['', Validators.required],
      document: ['', Validators.required],
    });
  }
}
