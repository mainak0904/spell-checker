import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCorrectorComponent } from './word-corrector.component';

describe('WordCorrectorComponent', () => {
  let component: WordCorrectorComponent;
  let fixture: ComponentFixture<WordCorrectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordCorrectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordCorrectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
