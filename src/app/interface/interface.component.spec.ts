import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceComponent } from './category.interface';

describe('InterfaceComponent', () => {
  let component: InterfaceComponent;
  let fixture: ComponentFixture<InterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
