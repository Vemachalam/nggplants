import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestannouncementUpdates } from './latestannouncement-updates';

describe('LatestannouncementUpdates', () => {
  let component: LatestannouncementUpdates;
  let fixture: ComponentFixture<LatestannouncementUpdates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestannouncementUpdates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestannouncementUpdates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
