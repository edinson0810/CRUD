import listar from "./app/ciudades/listar.js";
import llenadoDocumento from "./app/ciudades/listarDocumento.js";
import insertar from "./app/usuarios/crear.js";

const ciudad = document.querySelector("#ciudad");
const ciudades = await listar();
const documentos = await llenadoDocumento();

// listar ciudades
const llenadoCiudad = (ciudades,elemento) => {
    const fragmento = document.createDocumentFragment();
    const option = document.createElement("option");
    option.textContent = "Seleccione ciudad...";
    fragmento.append(option)
    ciudades.forEach(({id, nombre}) => {
        const option = document.createElement("option");
        option.textContent = nombre;
        option.value = id;
        fragmento.append(option);
    });
    elemento.append(fragmento);
}

// listar documentos
const llenadoDocumentos = (documentos, elemento)=>{
    const fragmento = document.createDocumentFragment();
    const option = document.createElement("option");
    option.textContent = "Seleccione documento...";
    fragmento.append(option);
    documentos.forEach(({id, nombre}) =>{
        const option = document.createElement("option");
        option.textContent = nombre;
        option.value = id;
        fragmento.append(option);
    })
    elemento.append(option);
}

const btn = document.querySelector('button[type="submit"]');
const guardarUsuario = () => {
    const data = {
        nombre: nombre.value,
        apellidos: apellidos.value,
        ciudad: ciudad.selectedIndex,
        telefono: telefono.value,
        direccion: direccion.value,
        tipo_documento: tipo_documento.selectedIndex,
        documento : documento.value,
        email: email.value
    }
    insertar(data)
}

llenadoCiudad(ciudades, ciudad);
llenadoDocumentos(documentos, documento);

btn.addEventListener("submit", guardarUsuario);
