import { Component, OnInit } from '@angular/core';
import { IMovieDTO ,ICharacter} from '../../models';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-catalog-thumbs',
  templateUrl: './catalog-thumbs.component.html',
  styleUrls: ['./catalog-thumbs.component.scss']
})
export class CatalogThumbsComponent implements OnInit {
movies: IMovieDTO;
characters : ICharacter[]
  constructor(private movieService: MovieService) { }
  tiles = [
    {text: 'One', cols: 2, rows: 3},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  ngOnInit() {
    // this.movieService.searchMovies()
    // .subscribe((results) => { // on sucesss
    //     //Called for each url result
    //     console.log("success"+results)
    //   },
    //   (err: any) => { // on error
    //     console.log(err);
    //   },
    //   () => { // on completion
    //     console.log('complete')
    //   })
    this.movieService.getSwapiMovie()
    .subscribe((
    data: IMovieDTO) => 
    this.movies = data
    ,
    err  => console.log(<any>err));
    }
  
}
