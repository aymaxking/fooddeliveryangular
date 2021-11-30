import {Menu} from "./menu";

 export interface Place {
  id?: string;
  title: string;
  description: string;
  img: string;
  menus: Menu[];
}
