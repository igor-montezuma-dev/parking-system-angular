import { Component, input } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {


  totalVacancies = input.required<number>()
  totalAvailable = input.required<number>()
  totalOccupied = input.required<number>()
  totalInactive = input.required<number>()


}
