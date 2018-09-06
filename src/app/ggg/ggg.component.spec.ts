import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GggComponent } from './ggg.component';

describe('GggComponent', () => {
  let component: GggComponent;
  let fixture: ComponentFixture<GggComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GggComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
