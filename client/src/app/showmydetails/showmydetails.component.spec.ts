import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmydetailsComponent } from './showmydetails.component';

describe('ShowmydetailsComponent', () => {
  let component: ShowmydetailsComponent;
  let fixture: ComponentFixture<ShowmydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
