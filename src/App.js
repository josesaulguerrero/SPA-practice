import { Loader } from '@components/loader';
import { Header } from '@components/header';
import { Main } from '@components/main';
import { Router } from '@routes/router';
import { InfiniteScroll } from '@helpers/infinite_scroll'


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
