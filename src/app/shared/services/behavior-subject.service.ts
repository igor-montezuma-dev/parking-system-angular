import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BehaviorSubjectService {
  private idSubject: BehaviorSubject<number | null> = new BehaviorSubject<
    number | null
  >(null);

  constructor() {}

  getId() {
    return this.idSubject.asObservable();
  }

  setId(id: number) {
    this.idSubject.next(id);
  }

  clearId() {
    this.idSubject.next(null);
  }
}
