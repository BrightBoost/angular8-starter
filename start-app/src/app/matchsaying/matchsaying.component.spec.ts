import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchsayingComponent } from './matchsaying.component';

describe('MatchsayingComponent', () => {
  let component: MatchsayingComponent;
  let fixture: ComponentFixture<MatchsayingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchsayingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchsayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
