import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsShowComponent } from './results-show.component';

describe('ResultsShowComponent', () => {
  let component: ResultsShowComponent;
  let fixture: ComponentFixture<ResultsShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
