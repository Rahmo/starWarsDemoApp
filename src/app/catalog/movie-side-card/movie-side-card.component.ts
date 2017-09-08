import { Component, OnInit,Input} from '@angular/core';
import { IMovieDTO,ICharacter,IMovieData } from '../../models';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movie-side-card',
  templateUrl: './movie-side-card.component.html',
  styleUrls: ['./movie-side-card.component.scss']
})
export class MovieSideCardComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  @Input()
  title:string
  character: ICharacter
  
  ngOnInit() {
    console.log(this.title);
    this.getCharacter()
  }

  public getCharacter(): string {
    let characterUrl :string = "" ;
    if (this.title == "Fav Character"){
       characterUrl = "https://swapi.co/api/people/1/"
    } else {
       characterUrl = "https://swapi.co/api/people/2/"
    }
    let name; 
    this.movieService.getSwapiCharacter(characterUrl)
    .subscribe((
    data: ICharacter) => 
    this.character = data
    ,
    err  => console.log(<any>err));

      return name
}
}
