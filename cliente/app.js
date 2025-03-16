import listar from "./app/ciudades/listar.js";
import { tipo } from "./app/ciudades/listar.js";



const ciudad = document.querySelector("#ciudades");

 const ciudades = await listar();

 const llenadoCiudad = (ciudades, elemento) => {
    const fragmento = document.createDocumentFragment();
    const option = document.createElement("option");
    option.textContent = "seleccione ciudad";
    fragmento.append(option);
ciudades.forEach(({id, nombre}) => {
     const option = document.createElement("option");
    option.textContent = nombre;
    option.value = id;
    fragmento.append(option)
      
});


elemento.append(fragmento);
 }



 
const guardarUsuario = () =>{
    const data = {

    }
insertar(data)
}

  llenadoCiudad(ciudades, ciudad);

