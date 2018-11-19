import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManMainComponent } from './man-main.component';

describe('ManMainComponent', () => {
  let component: ManMainComponent;
  let fixture: ComponentFixture<ManMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
