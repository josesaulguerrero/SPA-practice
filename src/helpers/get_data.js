export async function GetData(url) {
   // let { url } = props;
   try {
      const data = await fetch(url)
      const response = await data.json()
      // console.log(response)
      
      return response;
   } catch(error) {
      console.log(error)
      document.getElementById("main").innerHTML = `
         <div class="error">
            <h1>Ocurrio un error al hacer la petición - 404 </h1>
         </div>
      `;
   }
}