import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFromAndImageUploadComponent } from './details-from-and-image-upload.component';

describe('DetailsFromAndImageUploadComponent', () => {
  let component: DetailsFromAndImageUploadComponent;
  let fixture: ComponentFixture<DetailsFromAndImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsFromAndImageUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFromAndImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
