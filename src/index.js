import '@styles/styles.css'
import { App } from "@src/App.js";
// import api from "./helpers/wp_api.js";

document.addEventListener('DOMContentLoaded', App)
window.addEventListener('hashchange', () => {
   // api.page = 1;
   App()
})