import { Component, OnInit, ViewChild } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";
import { Location } from "src/app/interfaces/character.interface";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true })
  infiniteScroll: IonInfiniteScroll;

  locations: Location[];

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service
      .getAllLocations()
      .subscribe((data) => (this.locations = data.results));
  }

  loadData(e: any) {
    this.service.getAllLocations(true).subscribe(
      (data) => {
        this.locations.push(...data.results);
        this.infiniteScroll.complete();
      },
      (err) => (this.infiniteScroll.disabled = true)
    );
  }
}
