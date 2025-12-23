import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantCatagoryComponent } from './plant-catagory.component';

describe('PlantCatagoryComponent', () => {
  let component: PlantCatagoryComponent;
  let fixture: ComponentFixture<PlantCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantCatagoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
