import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlaceComponent } from './components/admin/places/add-place/add-place.component';
import { EditPlaceComponent } from './components/admin/places/edit-place/edit-place.component';
import { ListPlaceComponent } from './components/admin/places/list-place/list-place.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./services/jwt.interceptor";
import { PlaceIndexComponent } from './components/place/place-index/place-index.component';
import {ListMenuComponent} from "./components/place/menu/list-menu/list-menu.component";
import {AddMenuComponent} from "./components/place/menu/add-menu/add-menu.component";
import {EditMenuComponent} from "./components/place/menu/edit-menu/edit-menu.component";

@NgModule({
  declarations: [
    AppComponent,
    AddPlaceComponent,
    EditPlaceComponent,
    ListPlaceComponent,
    NavbarComponent,
    PageNotFoundComponent,
    LoginComponent,
    PlaceIndexComponent,
    ListMenuComponent,
    AddMenuComponent,
    EditMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
