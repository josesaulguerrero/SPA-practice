import api from '@helpers/wp_api';
import { PostDetailed } from '@components/postDetailed';
import { BackButton } from '@components/backButton';
import { GetData } from '@helpers/get_data';
import { ErrorPost } from '@templates/errorPost';

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