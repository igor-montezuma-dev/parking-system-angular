import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyDetailsDialogComponent } from './vacancy-details-dialog.component';

describe('VacancyDetailsDialogComponent', () => {
  let component: VacancyDetailsDialogComponent;
  let fixture: ComponentFixture<VacancyDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacancyDetailsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacancyDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
