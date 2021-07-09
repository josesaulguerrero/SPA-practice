import api from '../helpers/wp_api'

export function Title() {
   const $h1 = document.createElement('h1');
   $h1.innerHTML = `
      <a href="${api.DOMAIN}" class="title-link" target="_blank" rel="noopener noreferer">
         ${api.NAME.toLocaleUpperCase()}
      </a>
   `;

   return $h1;
}