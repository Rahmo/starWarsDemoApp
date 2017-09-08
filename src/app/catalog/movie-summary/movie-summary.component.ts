import { Component, OnInit,Input } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { IMovieDTO,ICharacter,IMovieData } from '../../models';
import { MovieService } from '../movie.service';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-movie-summary',
  templateUrl: './movie-summary.component.html',
  styleUrls: ['./movie-summary.component.scss']
})
export class MovieSummaryComponent implements OnInit {
  @Input()
  movie: IMovieDTO;
  characters:ICharacter[]; 

  private errorMessage:any = '';
  constructor(private movieService: MovieService) { }
  ngOnInit() {
  }

public callService(url: string): string {
    var name; 
      // this.movieService.getSwapiCharacter(url)
      // .subscribe((
      // data: ICharacter) => 
      // name = data
      // ,
      // err  => console.log(<any>err));
      return name
}
public getCharacter (url: string):string{
  var name; 
  name = this.callService(url)
  return name
}
}
