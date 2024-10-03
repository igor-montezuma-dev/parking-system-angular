import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.scss'
})
export default class VacancyListComponent {

  vacancies = Array(40).fill('available'); // 40 vagas, todas inicialmente disponíveis

  getIconColor(status: string): string {
    switch (status) {
      case 'available':
        return 'green';
      case 'occupied':
        return 'red';
      case 'reserved':
        return 'yellow';
      default:
        return 'grey';
    }
  }
}
