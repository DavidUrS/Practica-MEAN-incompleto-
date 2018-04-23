import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPeoplesComponent } from './get-peoples.component';

describe('GetPeoplesComponent', () => {
  let component: GetPeoplesComponent;
  let fixture: ComponentFixture<GetPeoplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetPeoplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetPeoplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
