import { BackButton } from './backButton.js';

export function PostDetailed(data) {
   const date = new Date(data.date).toLocaleDateString();

   return `
      <section class="moreInfo" id="moreInfo">
         <aside class="moreInfo--aside" >
            <h2>${data.title.rendered}</h2>
            <time datetime="${date}">${date}</time>
         </aside>
         <hr>
         <article>${data.content.rendered}</article>
      </section>
   `;
} 
