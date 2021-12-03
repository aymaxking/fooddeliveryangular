import { Component, OnInit } from '@angular/core';
import {PlaceService} from "../../../../services/place.service";
import {Place} from "../../../../models/place";

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit {
  place: Place = Object();

  constructor(private service: PlaceService) { }

  ngOnInit(): void {
    this.getPlace();
  }
  getPlace(){
    // @ts-ignore
    this.service.getById(46).subscribe((res: Place) => this.place = res);
  }
}
