export function BackButton() {
   const $button = document.createElement('button');
   $button.innerText = "Go back";
   $button.classList.add('back-button');
   $button.id = 'back-button';
   $button.onclick = () => {
      history.scrollRestoration = 'auto';
      window.history.back();
   }

   return $button;
}