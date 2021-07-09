import { Loader } from './components/loader.js';
import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { Router } from './routes/router.js';
import { InfiniteScroll } from './helpers/infinite_scroll.js'


export async function App() {
   history.scrollRestoration = 'auto';
   const $root = document.getElementById("root");
   $root.innerHTML = null;
   $root.appendChild(Header());
   $root.appendChild(Main());
   $root.appendChild(Loader());
   Router();
   InfiniteScroll()
}
