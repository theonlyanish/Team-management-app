import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpentimeComponent } from './opentime.component';

describe('OpentimeComponent', () => {
  let component: OpentimeComponent;
  let fixture: ComponentFixture<OpentimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpentimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpentimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
