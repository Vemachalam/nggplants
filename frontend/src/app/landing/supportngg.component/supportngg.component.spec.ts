import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportnggComponent } from './supportngg.component';

describe('SupportnggComponent', () => {
  let component: SupportnggComponent;
  let fixture: ComponentFixture<SupportnggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportnggComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportnggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
