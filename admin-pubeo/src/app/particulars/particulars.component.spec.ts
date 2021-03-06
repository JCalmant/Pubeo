import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticularsComponent } from './particulars.component';

describe('ParticularComponent', () => {
  let component: ParticularsComponent;
  let fixture: ComponentFixture<ParticularsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticularsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
