import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryscreenComponent } from './galleryscreen.component';

describe('GalleryscreenComponent', () => {
  let component: GalleryscreenComponent;
  let fixture: ComponentFixture<GalleryscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
