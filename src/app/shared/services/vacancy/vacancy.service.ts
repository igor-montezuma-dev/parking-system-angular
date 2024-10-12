import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { parkingSpotResponse, ParkinSpot } from '../../../core/model/vacancy';


@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private http: HttpClient = inject(HttpClient);

  protected readonly BASE_URL: string = '/vacancies';


  public getAllVacancies() {
    return this.http.get<parkingSpotResponse>(`${environment.api}${this.BASE_URL}/all`);
  }

  public getVacancyById(id: number) {
    return this.http.get<ParkinSpot>(`${environment.api}${this.BASE_URL}/${id}`);
  }

  public updateVacancy(id: number, data: any) {
    return this.http.patch<ParkinSpot>(`${environment.api}${this.BASE_URL}/${id}`, data);
  }
}
