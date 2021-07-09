import { Menu } from "@components/menu";
import { SearchBar } from "@components/searchBar";
import { Title } from "@components/title";

export function Header() {
   const $header = document.createElement("header");
   $header.classList.add('header');
   $header.appendChild(Title());
   $header.appendChild(Menu());
   $header.appendChild(SearchBar());

   return $header;
}