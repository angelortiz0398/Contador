import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDissComponent } from './button-diss.component';

describe('ButtonDissComponent', () => {
  let component: ButtonDissComponent;
  let fixture: ComponentFixture<ButtonDissComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDissComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDissComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
