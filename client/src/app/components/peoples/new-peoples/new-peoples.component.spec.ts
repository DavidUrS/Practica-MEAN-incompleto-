import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPeoplesComponent } from './new-peoples.component';

describe('NewPeoplesComponent', () => {
  let component: NewPeoplesComponent;
  let fixture: ComponentFixture<NewPeoplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPeoplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPeoplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
