import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillVacancyFormComponent } from './fill-vacancy-form.component';

describe('FillVacancyFormComponent', () => {
  let component: FillVacancyFormComponent;
  let fixture: ComponentFixture<FillVacancyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FillVacancyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillVacancyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
