export function Menu() {
   const $menu = document.createElement('nav');
   $menu.classList.add('nav-menu');
   $menu.innerHTML = `
      <a href="#/" class="nav-link" id="home" >Home</a>
      <a href="#/search" class="nav-link" id="search" >Search</a>
      <a href="#/about" class="nav-link" id="about" >About</a>
   `;

   return $menu;
}