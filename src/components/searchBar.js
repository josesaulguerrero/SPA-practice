export function SearchBar() {
   const $form = document.createElement('form');
   $form.classList.add('form');
   const $input = document.createElement('input');
   $input.name = 'search';
   $input.type = 'search';
   $input.classList.add('search-input')
   $input.placeholder = 'search something...';
   const $submitButton = document.createElement('button');
   $submitButton.innerText = "search";
   $submitButton.type = "button";
   $submitButton.classList.add('search-button')
   $form.appendChild($input);
   $form.appendChild($submitButton);

   return $form;
}