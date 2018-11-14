import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManSampleCompComponent } from './man-sample-comp.component';

describe('ManSampleCompComponent', () => {
  let component: ManSampleCompComponent;
  let fixture: ComponentFixture<ManSampleCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManSampleCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManSampleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
