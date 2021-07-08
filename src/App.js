import api from './helpers/wp_api.js'
import { GetData } from './helpers/get_data.js';
// import { Title } from './components/title.js';
import { Loader } from './components/loader.js';
import { Header } from './components/header.js';
import { Posts } from './components/posts.js';
import { PostCard } from './components/postCard.js';

export async function App() {
   const $main = document.getElementById("main");
   $main.appendChild(Header());
   $main.appendChild(Posts());
   $main.appendChild(Loader());

   const data = await GetData(api.POSTS);
   console.log(data)
   let html = "";
   data.forEach(element => html += PostCard(element) );
   document.getElementById("loader").style.visibility = "hidden";
   // document.getElementById("loader").style.opacity = 0;
   document.getElementById("posts-section").innerHTML = html;
}
