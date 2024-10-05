import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-fill-vacancy-form',
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  templateUrl: './fill-vacancy-form.component.html',
  styleUrl: './fill-vacancy-form.component.scss'
})
export class FillVacancyFormComponent implements OnInit {

  searchRegisterForm!: FormGroup;
  createNewRegisterForm!: FormGroup;
  public fb: FormBuilder = inject(FormBuilder);

  public snackBar: MatSnackBar = inject(MatSnackBar);

  public isSearching : boolean = false;

  ngOnInit(): void {
    this.searchRegisterForm = this.fb.group({
      licensePlate: ['', Validators.required],
      document: ['', Validators.required],
    });

    this.createNewRegisterForm = this.fb.group({
      licensePlate: ['', Validators.required],
      document: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }


  public searchRegister(): void {
    this.isSearching = true;

  }
}
