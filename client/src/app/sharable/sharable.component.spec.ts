import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharableComponent } from './sharable.component';

describe('SharableComponent', () => {
  let component: SharableComponent;
  let fixture: ComponentFixture<SharableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
