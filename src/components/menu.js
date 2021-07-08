export function Menu() {
   const $menu = document.createElement('nav');
   $menu.classList.add('nav-menu');
   $menu.innerHTML = `
      <a href="#/" class="nav-link" >Home</a>
      <a href="#/search" class="nav-link" >Search</a>
      <a href="#/about" class="nav-link" >About</a>
   `;

   return $menu;
}