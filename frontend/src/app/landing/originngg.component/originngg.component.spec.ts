import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginnggComponent } from './originngg.component';

describe('OriginnggComponent', () => {
  let component: OriginnggComponent;
  let fixture: ComponentFixture<OriginnggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OriginnggComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OriginnggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
