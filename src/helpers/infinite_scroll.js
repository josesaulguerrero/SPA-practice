import api from "@helpers/wp_api";
import { SearchCard } from '@components/searchCard';
import { PostCard } from '@components/postCard';
import { GetData } from '@helpers/get_data'

export async function InfiniteScroll() {
   let 
      query = sessionStorage.getItem('wp-search'),
      apiURL,
      Component;

   window.addEventListener('scroll', async (event) =>{
      let { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      let { hash } = location;

      // console.log(scrollTop, clientHeight, scrollHeight, hash)
      if(scrollTop + clientHeight >= scrollHeight) {
         api.page += 1;

         if(!hash || hash === "#/") {
            apiURL = `${api.POSTS}&page=${api.page}`
            Component = PostCard;
         } else if(hash.includes("#/search")) {
            apiURL = `${api.SEARCH}${query}&page=${api.page}`
            Component = SearchCard;
         } else {
            return false;
         }

         // console.log(apiURL)
         document.querySelector('#loader').style.display = "block"
         
         const data = await GetData(apiURL);
         const newHtml = data.reduce((acumulator, item) => {
            return acumulator += Component(item)
         }, "")

         document.querySelector('#loader').style.display = "none"



         const $main = document.getElementById('main');
         $main.insertAdjacentHTML("beforeend", newHtml)
         // data.reduce((acumulator, item) => {

         // }, sessionStorage.getItem('data-home'))
      }

   })
}

