import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CharacterResponse } from "../interfaces/character.interface";
import { EpisodeResponse } from "../interfaces/episode.interface";
import { LocationResponse } from "../interfaces/location.interface";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  charactersPage = 1;
  locationsPage = 1;
  episodesPage = 1;

  private url = "https://rickandmortyapi.com/api";

  constructor(private http: HttpClient) {}

  getAllCharacters(next?: boolean) {
    if (next) {
      this.charactersPage = this.charactersPage + 1;
    }
    return this.http.get<CharacterResponse>(
      `${this.url}/character?page=${this.charactersPage}`
    );
  }

  getAllLocations(next?: boolean) {
    if (next) {
      this.locationsPage = this.locationsPage + 1;
    }
    return this.http.get<LocationResponse>(
      `${this.url}/location?page=${this.locationsPage}`
    );
  }

  getAllEpisodes(next?: boolean) {
    if (next) {
      this.episodesPage = this.episodesPage + 1;
    }
    return this.http.get<EpisodeResponse>(
      `${this.url}/episode?page=${this.episodesPage}`
    );
  }
}
