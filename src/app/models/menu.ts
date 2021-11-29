import {Submenu} from "./submenu";

export interface Menu {
  id?: string;
  title: string;
  subMenus: Submenu[];
}
