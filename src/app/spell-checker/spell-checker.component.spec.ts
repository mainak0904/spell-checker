import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellCheckerComponent } from './spell-checker.component';

describe('SpellCheckerComponent', () => {
  let component: SpellCheckerComponent;
  let fixture: ComponentFixture<SpellCheckerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpellCheckerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
