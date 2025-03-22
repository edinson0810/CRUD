import listar from "./app/ciudades/listar.js";
import llenadoDocumento from "./app/ciudades/listarDocumento.js";
import insertar from "./app/usuarios/crear.js";
import { tipo } from "./app/ciudades/listar.js";
import { get_Usuario } from "./app/usuarios/listar.js";






const nombre = document.querySelector("#nombre");
const apellidos = document.querySelector("#apellidos");
const telefono = document.querySelector("#telefono");
const direccion = document.querySelector("#direccion");
const ciudad = document.querySelector("#ciudades");
const tipo_documento = document.querySelector("#tipo");
const documento = document.querySelector("#documento");
const email = document.querySelector("#email");
const politicas = document.querySelector("#politicas");




const ciudades = await listar();
const tipo_documentos = await llenadoDocumento();

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
const llenadoDocumentos = (documento, elemento)=>{
    const fragmento = document.createDocumentFragment();
    const option = document.createElement("option");
    option.textContent = "Seleccione documento...";
    fragmento.append(option);
    documento.forEach(({id, nombre}) =>{
        const option = document.createElement("option");
        option.textContent = nombre;
        option.value = id;
        fragmento.append(option);
    })
    elemento.append(fragmento);
}


const btn = document.querySelector('form');
const guardarUsuario = (event) => {
    event.preventDefault()
    // const validarFormulario = () => {
//     let esValido = true;
//     const campos = [
//         { campo: nombre, mensaje: "El nombre es obligatorio" },
//         { campo: apellidos, mensaje: "El apellido es obligatorio" },
//         { campo: telefono, mensaje: "El teléfono es obligatorio" },
//         { campo: direccion, mensaje: "La dirección es obligatoria" },
//         { campo: documento, mensaje: "El documento es obligatorio" },
//         { campo: email, mensaje: "El email es obligatorio" },
//     ];

//     // Validar inputs vacíos
//     campos.forEach(({ campo, mensaje }) => {
//         if (campo.value.trim() === "") {
//             alert(mensaje);
//             campo.focus();
//             esValido = false;
//             return;
//         }
//     });

//     // Validar selects
//     if (ciudades.value === "") {
//         alert("Debe seleccionar una ciudad");
//         ciudad.focus();
//         esValido = false;
//     }
//     if (tipo_documento.value === "") {
//         alert("Debe seleccionar un tipo de documento");
//         tipo_documento.focus();
//         esValido = false;
//     }

//     return esValido;
// };

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
llenadoDocumentos(tipo_documentos, tipo_documento);

btn.addEventListener("submit", guardarUsuario)