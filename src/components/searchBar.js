export function SearchBar() {
   const $form = document.createElement('form');
   $form.classList.add('form');

   const $input = document.createElement('input');
   $input.name = 'search';
   $input.type = 'search';
   $input.classList.add('search-input')
   $input.placeholder = 'search something...';
   $input.autocomplete = 'off';

   const $submitButton = document.createElement('button');
   $submitButton.innerText = "search";
   $submitButton.type = "submit";
   $submitButton.classList.add('search-button')

   document.addEventListener('submit', event => {
      if(!event.target.matches(".form")) return false;

      event.preventDefault();      // console.log(event)
      sessionStorage.setItem("wp-search", event.target.search.value);
      location.hash = `#/search?search=${event.target.search.value}`
   })

   $form.appendChild($input);
   $form.appendChild($submitButton);

   return $form;
}