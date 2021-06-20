import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutscreenComponent } from './aboutscreen.component';

describe('AboutscreenComponent', () => {
  let component: AboutscreenComponent;
  let fixture: ComponentFixture<AboutscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
