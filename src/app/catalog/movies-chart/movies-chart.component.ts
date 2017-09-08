import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { IMovieDTO,ICharacter,IMovieData } from '../../models';
import 'rxjs/add/operator/mergeMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-movies-chart',
  templateUrl: './movies-chart.component.html',
  styleUrls: ['./movies-chart.component.scss']
})
export class MoviesChartComponent implements OnInit{

  constructor(private movieService: MovieService) {
   }
movies:IMovieDTO
  ngOnInit() {
    this.getMovies();
   // this.getDate();
  }
  public barChartLabels:string[]=[] ;
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
    {data: [], label: 'Opening Scrawl Length'}
  ];
  
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

 //Building the labels and submethoding to build the data
 public BuildMoviesChart(movies:any){
  this.BuildDataChart(movies)
    movies.forEach(element => {
      this.barChartLabels.push(element.title as string);
    });
 }
 public BuildDataChart(movies:any):Number[]{
  var arr : Array<Number> = new Array();
  movies.forEach(element => {
   arr.push(this.WordCount(element.opening_crawl));
   this.barChartData = arr
  });
  return arr
}
//helper method this should be moved in a utility service
public WordCount(str) { 
  return str.split(" ").length;
}

 //using the service to get the movies list
 public getMovies(){
  this.movieService.getSwapiMovie()
  .subscribe((
  data: IMovieDTO) => 
   this.BuildMoviesChart(data)
  ,
  err  => console.log(<any>err)
  );
}}
