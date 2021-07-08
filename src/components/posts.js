export function Posts() {
   const $posts = document.createElement('section');
   $posts.classList.add('posts-section');
   $posts.id = "posts-section";

   return $posts;
}