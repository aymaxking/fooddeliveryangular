import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPlaceComponent} from "./components/list-place/list-place.component";
import {EditPlaceComponent} from "./components/edit-place/edit-place.component";
import {LoginComponent} from "./components/login/login.component";
import {PageNotFoundComponent} from "./components/partials/page-not-found/page-not-found.component";
import {AddPlaceComponent} from "./components/add-place/add-place.component";
import {AuthGuard} from "./guards/auth.guard";
import {AfterauthGuard} from "./guards/afterauth.guard";

const routes: Routes = [
  {
    path: "", redirectTo: '/places', pathMatch: 'full'
  },
  {
    path: "places", children: [
      {
        path: "", component: ListPlaceComponent
      },
      {
        path: "create", component: AddPlaceComponent
      },
      {
        path: "edit/:id", component: EditPlaceComponent
      },
    ],canActivate: [AuthGuard]
  },
  {
    path: "login", component: LoginComponent,canActivate: [AfterauthGuard]
  },
  {
    path: "**", component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
