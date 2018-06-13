import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsucculentComponent } from './addsucculent.component';

describe('AddsucculentComponent', () => {
  let component: AddsucculentComponent;
  let fixture: ComponentFixture<AddsucculentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsucculentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsucculentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
