import { Component, OnInit, ViewChild } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";
import { Character } from "src/app/interfaces/character.interface";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: true })
  infiniteScroll: IonInfiniteScroll;

  characters: Character[];

  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.service
      .getAllCharacters()
      .subscribe((data) => (this.characters = data.results));
  }

  loadData(e: any) {
    this.service.getAllCharacters(true).subscribe(
      (data) => {
        this.characters.push(...data.results);
        this.infiniteScroll.complete();
      },
      (err) => (this.infiniteScroll.disabled = true)
    );
  }
}
