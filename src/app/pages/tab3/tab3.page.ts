import { Component, OnInit, ViewChild } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";
import { Episode } from "src/app/interfaces/episode.interface";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true })
  infiniteScroll: IonInfiniteScroll;

  episodes: Episode[];

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service
      .getAllEpisodes()
      .subscribe((data) => (this.episodes = data.results));
  }

  loadData(e: any) {
    this.service.getAllEpisodes(true).subscribe(
      (data) => {
        this.episodes.push(...data.results);
        this.infiniteScroll.complete();
      },
      (err) => (this.infiniteScroll.disabled = true)
    );
  }
}
