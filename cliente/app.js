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
//     if (ciudad.value === "") {
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
