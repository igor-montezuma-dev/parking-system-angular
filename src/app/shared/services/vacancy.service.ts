import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { parkingSpotResponse } from '../../core/model/vacancy';


@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private http: HttpClient = inject(HttpClient);

  protected readonly BASE_URL: string = '/vacancies';


  public getAllVacancies() {
    return this.http.get<parkingSpotResponse>(`${environment.api}${this.BASE_URL}/all`);
  }
}
