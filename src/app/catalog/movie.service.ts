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
  movies : IMovieDTO[]
  moviesObj : IMovieData[]
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
   }).do(data => console.log('server data lol:', data))
   .catch(this._serverError); 
  }
  getSwapiMovieEdite():Observable<IMovieDTO>{
    const query: string = `https://swapi.co/api/films/?format=json`;
    return this.http.get(query)
    .flatMap((response: Response) => 
    //Waits until all the requests are completed before emitting
    //an array of results
    Observable.forkJoin(response.json().results.map(film => 
     film.characters
   // .map(character=>this.http.get(character))
    .map(character=>this.http.get(character))
    ))).do(data => console.log('server data from edit:', data))
    .catch(this._serverError);
  
  }

  searchMovies(): Observable<any> {
    const query: string = `https://swapi.co/api/films/?format=json`;
    let that = this
    let queryUrl: string = query;
    return this.http.get(queryUrl)
    .flatMap((response: Response) => response.json().results)
    .flatMap((film: IMovieDTO) =>
    // Observable.zip(
    //   Observable.of(
    //     (film.title, film.director, film.release_date, Array<ICharacter>())),
    //   Observable.from(film.characters)
    // )
    Observable.forkJoin(film.characters.map(character => 
       this.http.get(character).map(resp => resp.json().name).do(a=>console.log("wow"+a))
    ))
    
  ).map(a=>this.moviesObj = a).do(a=>console.log("fromMap"+a))
  
    }
    
  search(): Observable<IMovieDTO> {
    return this.http.get(`https://swapi.co/api/films/?format=json`)
    
    .flatMap((response: Response) => 
               //Waits until all the requests are completed before emitting
               //an array of results
               Observable.forkJoin(response.json().results.map(film => 
                film.characters
              // .map(character=>this.http.get(character))
               .map(character=>this.http.get(character))
               ))).do(data => console.log('server data:', data))
               .catch(this._serverError);
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

 //------------using a Promise -------------////
//   getSwapiCharacter (characterUrl:string): Promise<ICharacter> {
//     return this.http.get(characterUrl)
//         .toPromise()
//         .then(this.extractData)
//         .catch(this.handleError);
// }
// private extractData(res: Response) {
//   console.log('server data:', res)
//     let body = res.json();
//     return body || [];
// }
// private handleError (error: any) {
//     // In a real world app, we might use a remote logging infrastructure
//     // We'd also dig deeper into the error to get a better message
//     let errMsg = (error.message) ? error.message :
//         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//     console.error(errMsg); // log to console instead
//     return Observable.throw(errMsg);
// }
//-----------End Promise ----------//



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
