import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterResponse } from '../interfaces/character.interface';
import { EpisodeResponse } from '../interfaces/episode.interface';
import { LocationResponse } from '../interfaces/location.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://rickandmortyapi.com/api';

  constructor( private http: HttpClient ) { }

  getAllCharacters(){
    return this.http.get<CharacterResponse>(`${this.url}/character`);
  }

  getAllLocations(){
    return this.http.get<LocationResponse>(`${this.url}/location`);
  }

  getAllEpisodes(){
    return this.http.get<EpisodeResponse>(`${this.url}/episode`);
  }
}
