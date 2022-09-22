import { Component, OnInit } from '@angular/core';
import { Episode } from 'src/app/interfaces/episode.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  episodes: Episode[];

  constructor( private service: ApiService ) {}

  ngOnInit(): void {
    this.service.getAllEpisodes().subscribe( data => this.episodes = data.results);
  }

}
