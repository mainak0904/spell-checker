import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvCorrectorComponent } from './csv-corrector.component';

describe('CsvCorrectorComponent', () => {
  let component: CsvCorrectorComponent;
  let fixture: ComponentFixture<CsvCorrectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CsvCorrectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvCorrectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
