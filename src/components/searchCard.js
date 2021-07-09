export function SearchCard(data) {
   let date = new Date(data.date).toLocaleString();
   const notFoundImage = "https://bitsofco.de/content/images/2018/12/broken-1.png";
   return `
      <article class="card fade-in" >
         <img src="${data._embedded.self[0].featured_media_src_url || notFoundImage}" alt="${data._embedded.self[0].title.rendered}" />
         <section class="card-content">
            <h2>${data._embedded.self[0].title.rendered}</h2>
            <p>
               <time datetime="${date}" >${date}</time>
               <a href="#/${data._embedded.self[0].slug}" rel="noopener noreferer">View more</a>
            </p>
         </section>
      </article>
   `;
}