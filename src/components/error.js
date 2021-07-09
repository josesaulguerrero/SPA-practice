export function Error() {
   const $error = document.createElement('article');
   $error.classList.add('error');
   $error.innerHTML = `
      <h1>Sorry, the requested data was not found :( - 404 </h1>
      <h3>Please try refreshing the page.</h3>
   `;
   document.getElementById("loader").style.visibility = "hidden";

   return $error;
}