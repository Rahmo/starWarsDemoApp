export interface IMovieSwapiAPIService {
    results: IMovieDTO[];
  }
  
  export interface IMovieCollection {
    version: string;
  
  }
  
  export interface IMovieDTO {
    title: string;
    episode_id: string;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles:string[];
    species:string[];
    created:string;
    edited:string;
    url:string;
  }
  
  export interface IMovieData {
    title: string;
    episode_id: string;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: ICharacter[];
    planets: string[];
    starships: string[];
    vehicles:string[];
    species:string[];
    created:string;
    edited:string;
    url:string;
  }

  export interface ICharacter {
    name : string;
  }
  