import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlaceComponent } from './components/add-place/add-place.component';
import { EditPlaceComponent } from './components/edit-place/edit-place.component';
import { ListPlaceComponent } from './components/list-place/list-place.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JwtInterceptor} from "./services/jwt.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    AddPlaceComponent,
    EditPlaceComponent,
    ListPlaceComponent,
    NavbarComponent,
    PageNotFoundComponent,
    LoginComponent,

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
