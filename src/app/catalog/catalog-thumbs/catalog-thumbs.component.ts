import { Component, OnInit } from '@angular/core';
import { IMovieDTO, ICharacter} from '../../models';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-catalog-thumbs',
  templateUrl: './catalog-thumbs.component.html',
  styleUrls: ['./catalog-thumbs.component.scss']
})
export class CatalogThumbsComponent implements OnInit {
movies: IMovieDTO;
characters: ICharacter[]
  constructor(private movieService: MovieService) { }

  ngOnInit() {

    this.movieService.search()
    .subscribe((
    data: IMovieDTO) =>
    this.movies = data,
    err  => console.log(<any>err));
    }
}
