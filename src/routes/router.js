import { Post } from '../templates/post.js';
import { ErrorPost } from '../templates/errorPost.js';
import { Home } from '../components/Home.js';


export async function Router() {
   let { hash } = location;
   const $main = document.getElementById("main");
   $main.innerHTML = null;

   if(!hash || hash === "#/") await Home();
   else if(hash.includes("#/search")) $main.innerHTML = "<h2>search</h2>"
   else if(hash === "#/about") $main.innerHTML = "<h2>about</h2>"
   else if((/#\/\b\w{1,}\b\-?.*/).test(location.hash)) await Post()
   else $main.innerHTML = ErrorPost();
   
   document.getElementById("loader").style.visibility = "hidden";
}