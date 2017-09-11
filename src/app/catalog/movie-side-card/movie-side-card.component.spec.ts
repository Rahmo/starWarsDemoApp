import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { forwardRef } from '@angular/core';
import { MovieSideCardComponent } from './movie-side-card.component';
import {  MaterialModule } from 'app/material.module'
import { MovieService } from '../movie.service';
import { BaseRequestOptions  } from '@angular/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  HttpModule,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http'; 
import { MockBackend } from '@angular/http/testing';
describe('MovieSideCardComponent', () => {
  let component: MovieSideCardComponent;
  let fixture: ComponentFixture<MovieSideCardComponent>;
  var movieService: MovieService;

  
  beforeEach(async(() => {
   // movieService = new MovieService(this.http);
    TestBed.configureTestingModule({
      imports: [ MaterialModule,HttpModule,HttpClientTestingModule],
      declarations: [ MovieSideCardComponent ],
      providers:    [ {provide: MovieService, useFactory: movieService } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSideCardComponent);
    component = fixture.componentInstance;
   // movieService = new MovieService(this.http);
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
   
  it('should create', () => {
    expect(component.character).toBeNull();
  });
});
