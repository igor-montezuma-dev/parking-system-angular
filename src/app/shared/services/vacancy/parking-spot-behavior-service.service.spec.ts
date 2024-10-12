import { TestBed } from '@angular/core/testing';

import { ParkingSpotBehaviorServiceService } from './parking-spot-behavior-service.service';

describe('ParkingSpotBehaviorServiceService', () => {
  let service: ParkingSpotBehaviorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkingSpotBehaviorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
