import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpencardComponent } from './opencard.component';

describe('OpencardComponent', () => {
  let component: OpencardComponent;
  let fixture: ComponentFixture<OpencardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpencardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpencardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
