import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  getAll(){
   return  this.http.get(environment.apiUrl+"/rest/places")
  }
  getById(id:number){
    return  this.http.get(environment.apiUrl+"/rest/places/"+id)
  }
}
