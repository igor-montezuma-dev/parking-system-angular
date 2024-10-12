import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ParkinSpot } from '../../../core/model/vacancy';

@Injectable({
  providedIn: 'root'
})
export class ParkingSpotBehaviorServiceService {



  private parkingSpotSource: BehaviorSubject<any> = new BehaviorSubject<any>(null);


  getData(): Observable<any> {
    return this.parkingSpotSource.asObservable();
  }


  setData(response: any): void {
    this.parkingSpotSource.next(response);
  }


  clearData(): void {
    this.parkingSpotSource.next(null);
  }
}
