import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleobsComponent } from './exampleobs.component';

describe('ExampleobsComponent', () => {
  let component: ExampleobsComponent;
  let fixture: ComponentFixture<ExampleobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
