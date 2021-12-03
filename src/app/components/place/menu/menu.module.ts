import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMenuComponent } from './list-menu/list-menu.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { EditMenuComponent } from './edit-menu/edit-menu.component';



@NgModule({
  declarations: [
    ListMenuComponent,
    AddMenuComponent,
    EditMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenuModule { }
