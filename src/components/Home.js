import { GetData } from "@helpers/get_data";
import api from "@helpers/wp_api";
import { PostCard } from "@components/postCard";


export async function Home() {
   const $main = document.getElementById("main");

   const data = await GetData(api.POSTS);
   let view = data.reduce((acumulator, item) => {
      return acumulator += PostCard(item);
   }, "");

   $main.innerHTML = view;
   sessionStorage.setItem('data-home', view);
}