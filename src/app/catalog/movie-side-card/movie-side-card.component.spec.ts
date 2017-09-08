import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSideCardComponent } from './movie-side-card.component';

describe('MovieSideCardComponent', () => {
  let component: MovieSideCardComponent;
  let fixture: ComponentFixture<MovieSideCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSideCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
