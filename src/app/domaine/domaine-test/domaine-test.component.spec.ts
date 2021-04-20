import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomaineTestComponent } from './domaine-test.component';

describe('DomaineTestComponent', () => {
  let component: DomaineTestComponent;
  let fixture: ComponentFixture<DomaineTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomaineTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomaineTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
