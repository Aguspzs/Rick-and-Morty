import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/interfaces/character.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  characters: Character[];

  constructor( private service: ApiService ) {}

  ngOnInit(): void {
    this.service.getAllCharacters().subscribe( data => this.characters = data.results);
  }

}
