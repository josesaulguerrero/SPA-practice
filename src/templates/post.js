import api from '../helpers/wp_api.js';
import { PostDetailed } from '../components/postDetailed.js';
import { BackButton } from '../components/backButton.js';
import { GetData } from '../helpers/get_data.js';
import { ErrorPost } from './errorPost.js';
// import { PostError } from './postError.js';

export async function Post() {
   const $main = document.getElementById("main");
   try{
      let { hash } = location;
      let { POST } = api;
      const slug = hash.replace(/#\/(.*)/, "$1");
      const url = POST+=slug;
      const data = await GetData(url);
      $main.innerHTML = PostDetailed(data[0]);
      const $moreInfo = document.querySelector('#moreInfo');
      $moreInfo.insertBefore(BackButton(), document.querySelector('.moreInfo--aside'));
   } catch{
      $main.innerHTML = ErrorPost();
   }
}