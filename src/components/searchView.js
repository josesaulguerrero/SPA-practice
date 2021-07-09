import { GetData } from "../helpers/get_data.js";
import api from "../helpers/wp_api.js";
import { ErrorSearch } from "../templates/errorSearch.js";
import { PostCard } from "./postCard.js";
import { SearchCard } from "./searchCard.js";

export async function SearchView() {
   const $main = document.getElementById("main");
   let query = sessionStorage.getItem('wp-search');
   // localStorage.removeItem('wp-search');
   const data = await GetData(`${api.SEARCH}${query}`)
   $main.innerHTML = data.reduce((acumulator, item) => {
      // console.log(item._embedded.self[0])
      return acumulator += SearchCard(item);
   }, "")
   if(!query) $main.innerHTML = "<h1 class='notSearch'>let's search something</h1>";
   if(data.length === 0 || !data){
      $main.innerHTML = ErrorSearch();
   }
}