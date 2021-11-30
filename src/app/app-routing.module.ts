import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListPlaceComponent} from "./components/admin/places/list-place/list-place.component";
import {EditPlaceComponent} from "./components/admin/places/edit-place/edit-place.component";
import {LoginComponent} from "./components/login/login.component";
import {PageNotFoundComponent} from "./components/partials/page-not-found/page-not-found.component";
import {AddPlaceComponent} from "./components/admin/places/add-place/add-place.component";
import {AuthGuard} from "./guards/auth.guard";
import {AfterauthGuard} from "./guards/afterauth.guard";
import {PlaceIndexComponent} from "./components/place/place-index/place-index.component";
import {ListMenuComponent} from "./components/place/menu/list-menu/list-menu.component";
import {AddMenuComponent} from "./components/place/menu/add-menu/add-menu.component";
import {EditMenuComponent} from "./components/place/menu/edit-menu/edit-menu.component";

const routes: Routes = [
  {
    path: "", redirectTo: '/admin', pathMatch: 'full'
  },
  {
    path: "admin", children: [
      {
        path: "", component: ListPlaceComponent
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
        ],
      },
    ],canActivate: [AuthGuard]
  },
  {
    path: "place", children: [
      {
        path: "", component: PlaceIndexComponent
      },
      {
        path: "menu", children: [
          {
            path: "", component: ListMenuComponent
          },
          {
            path: "create", component: AddMenuComponent
          },
          {
            path: "edit/:id", component: EditMenuComponent
          },
        ],
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
