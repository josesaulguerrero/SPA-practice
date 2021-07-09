import { Post } from '@templates/post';
import { ErrorPost } from '@templates/errorPost';
import { Home } from '@components/Home';
import { SearchView } from '@components/searchView';
import { About } from '@components/about';


export async function Router() {
   let { hash = "#/home" } = location;
   const $main = document.getElementById("main");
   $main.innerHTML = null;
   document.querySelector('.search-input').value = sessionStorage.getItem('wp-search');

   if(!hash || hash === "#/"){ 
      const $home_link = document.getElementById('home');
      $home_link.classList.add('home-down');
      await Home();
   }
   else if(hash.includes("#/search")){
      const $search_link = document.getElementById('search');
      $search_link.classList.add('search-down');
      await SearchView(); 
   }
   else if(hash === "#/about") {
      const $about_link = document.getElementById('about');
      $about_link.classList.add('about-down');
      $main.innerHTML = About();
   }
   else if((/#\/\b\w{1,}\b\-?.*/).test(location.hash)) await Post()
   else $main.innerHTML = ErrorPost();

   
   document.getElementById("loader").style.visibility = "hidden";
}