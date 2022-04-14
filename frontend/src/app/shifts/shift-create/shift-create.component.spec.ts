import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftCreateComponent } from './shift-create.component';

describe('ShiftCreateComponent', () => {
  let component: ShiftCreateComponent;
  let fixture: ComponentFixture<ShiftCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShiftCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
