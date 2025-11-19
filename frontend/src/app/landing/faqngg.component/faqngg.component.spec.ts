import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqnggComponent } from './faqngg.component';

describe('FaqnggComponent', () => {
  let component: FaqnggComponent;
  let fixture: ComponentFixture<FaqnggComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FaqnggComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqnggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
