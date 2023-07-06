import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTaskCardComponent } from './open-task-card.component';

describe('OpenTaskCardComponent', () => {
  let component: OpenTaskCardComponent;
  let fixture: ComponentFixture<OpenTaskCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenTaskCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenTaskCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
