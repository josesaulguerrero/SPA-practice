export function PostCard(data) {
   let date = new Date(data.date).toLocaleString();
   const notFoundImage = "https://bitsofco.de/content/images/2018/12/broken-1.png";
   return `
      <article class="card fade-in" >
         <img src="${ data._embedded["wp:featuredmedia"][0].link || notFoundImage}" alt="${data.title.rendered}" />
         <section class="card-content">
            <h2>${data.title.rendered}</h2>
            <p>
               <time datetime="${date}" >${date}</time>
               <a href="#/${data.slug}" rel="noopener noreferer">View more</a>
            </p>
         </section>
      </article>
   `;
}