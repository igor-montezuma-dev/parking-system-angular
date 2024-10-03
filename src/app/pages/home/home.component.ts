import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import  VacancyListComponent  from '../../components/vacancy-list/vacancy-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, VacancyListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent {

}
