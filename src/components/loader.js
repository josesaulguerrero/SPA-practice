export function Loader() {
   const $loader = document.createElement("img");
   $loader.src = 'https://css-tricks.com/wp-content/uploads/2021/06/s_6E4A6D840252F5540E6AD67A17BE7E31259197611E9560BE4326E845931F9BD4_1624057679356_Untitled-2.gif';
   $loader.alt = 'Cargando..';
   $loader.classList.add('loader');
   $loader.id = "loader";

   return $loader;
}