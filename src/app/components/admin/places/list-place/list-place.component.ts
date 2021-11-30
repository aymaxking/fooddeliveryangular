import { Component, OnInit } from '@angular/core';
import {PlaceService} from "../../../../services/place.service";
import {Place} from "../../../../models/place";

@Component({
  selector: 'app-list-place',
  templateUrl: './list-place.component.html',
  styleUrls: ['./list-place.component.css']
})
export class ListPlaceComponent implements OnInit {

  places: Place[] = [];

  constructor(private service: PlaceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    // @ts-ignore
    this.service.getAll().subscribe((res: Place[]) => this.places = res);
  }

}
