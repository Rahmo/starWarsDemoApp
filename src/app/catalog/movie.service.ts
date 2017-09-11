import { Injectable } from '@angular/core';
import { IMovie } from '../models';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/observable/zip';
import "rxjs/add/observable/interval";
import "rxjs/add/operator/take";
import "rxjs/add/operator/map";
import "rxjs/add/operator/bufferCount"
import * as Rx from 'rxjs/rx'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
const SWAPI_API: string = 'https://swapi.co/api';


import {
  IMovieSwapiAPIService,
  IMovieDTO,
  ICharacter,
  IMovieData
} from '../models';
@Injectable()
export class MovieService {
  movie: IMovieDTO
  movies : IMovieDTO[]
  moviesObject : IMovieData[]
  characters: ICharacter[]
  constructor(private http: Http) { }
 
  getSwapiMovie():Observable<IMovieDTO>{
    const query: string = `https://swapi.co/api/films/?format=json`;
    return this.http
    .get(query)
    // .map(res => res.json())  // could raise an error if invalid JSON
    // .do(data => console.log('server data:', data))  // debug
    // .catch(this._serverError);
     .map((result: Response) => { //observale
      return (<IMovieSwapiAPIService>(result.json())).results;
   }).do(data => console.log('server data:', data))
   .catch(this._serverError); 
  }

  search(): Observable<IMovieDTO> {
    const query: string = `https://swapi.co/api/films/?format=json`;
   return this.http.get(query)
   
   .map((response: Response) => response.json().results as IMovieDTO)
  //  .flatMap((film : IMovieDTO) => {
  //      return Observable.forkJoin(
  //          film.characters.map(user=>
  //              this.http.get(user)
  //              .map(response => response.json().name)   
  //          )   
  //      )
  //  }).map(x=> [].concat.apply([],x))
   //.map((film: IMovieDTO) => 
   //Waits until all the requests are completed before emitting
   //an array of results
  //  Observable.forkJoin(film.characters.map(character => 
  //    this.http.get(character).map(resp => resp.json().name)
  //  ))
 // )
    
   

    // .map((res: Response) => {
    //   this.movie = res.json().results;
    //   console.log("the moviesObject"+this.moviesObject)
    //   return this.movie;
    // })
   // .flatMap(film => film)
  
             

             
  //  .flatMap(a=>a.characters)
  //   .flatMap(a=>a,(film: string[]) => this.http.get(film), 
  //   (_, resp) => resp.json().name)
    // .flatMap((film: string) => this.http.get(film), 
    // (_, resp) => resp.json().name)

  
}

  public getSwapiCharacter(characterUrl:string):Observable<ICharacter> {
    return this.http
    .get(characterUrl)
     .map((result: Response) => { //observale
      return (<ICharacter>(result.json())).name;
   })
   .do(data => console.log('char server data:', data))
   .catch(this._serverError);
  }

  private _serverError(err: any) {
    console.log('sever error:', err);  // debug
    if(err instanceof Response) {
      return Observable.throw(err.json().error || 'backend server error');
      // if you're using lite-server, use the following line
      // instead of the line above:
      //return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(err || 'backend server error');
}

    
  
}
