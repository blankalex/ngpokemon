import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-pokemons",
  templateUrl: "./pokemons.component.html",
  styleUrls: ["./pokemons.component.css"]
})
export class PokemonsComponent implements OnInit {
  @Input() name?: number;
  @Input() url?: string;

  constructor() {}

  ngOnInit() {}
}
