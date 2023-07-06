import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SprintpageComponent } from './sprintpage.component';

describe('SprintpageComponent', () => {
  let component: SprintpageComponent;
  let fixture: ComponentFixture<SprintpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SprintpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SprintpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
