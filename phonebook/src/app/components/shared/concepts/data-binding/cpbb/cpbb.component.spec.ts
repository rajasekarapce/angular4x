import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpbbComponent } from './cpbb.component';

describe('CpbbComponent', () => {
  let component: CpbbComponent;
  let fixture: ComponentFixture<CpbbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpbbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpbbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
