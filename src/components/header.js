import { Menu } from "./menu.js";
import { SearchBar } from "./searchBar.js";
import { Title } from "./title.js";

export function Header() {
   const $header = document.createElement("header");
   $header.classList.add('header');
   $header.appendChild(Title());
   $header.appendChild(Menu());
   $header.appendChild(SearchBar());

   return $header;
}