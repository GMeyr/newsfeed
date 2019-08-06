import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCTAComponent } from './side-cta.component';

describe('SideCTAComponent', () => {
  let component: SideCTAComponent;
  let fixture: ComponentFixture<SideCTAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideCTAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideCTAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
