import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/interfaces/character.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  locations: Location[];

  constructor( private service: ApiService ) {}

  ngOnInit(): void {
    this.service.getAllLocations().subscribe( data => this.locations = data.results);
  }
}
