import { Error } from "@components/error";

export async function GetData(url) {
   // let { url } = props;
   try {
      const data = await fetch(url)
      const response = await data.json();
      // console.log(response)
      
      return response;
   } catch(error) {
      console.log('hola')
      document.getElementById("main").appendChild(Error());
   }
}