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
const guardarUsuario = (event, formularioId) => {
    event.preventDefault()

    const form = document.querySelector(formularioId); // Obtiene el formulario correctamente
    
    if (!form) {
        console.error("Formulario no encontrado:", formularioId);
        return;
    }

 if (nombre.value == "") {
            alert("El nombre es obligatorio");
            nombre.focus();
            return;
        }
        
    const validarFormulario = () => {
        let esValido = true;
    
        const campos = [
            { campo: nombre, mensaje: "El nombre es obligatorio" },
            { campo: apellidos, mensaje: "El apellido es obligatorio" },
            { campo: telefono, mensaje: "El teléfono es obligatorio" },
            { campo: direccion, mensaje: "La dirección es obligatoria" },
            { campo: documento, mensaje: "El documento es obligatorio" },
            { campo: email, mensaje: "El email es obligatorio" },
        ];
    
        // Validar inputs vacíos
        for (const { campo, mensaje } of campos) {
            if (campo.value.trim() === "") {
                alert(mensaje);
                campo.focus();
                return false;
            }
        }
    
        // Validar selects
        if (ciudad.selectedIndex === 0) {
            alert("Debe seleccionar una ciudad");
            ciudad.focus();
            return false;
        }
        if (tipo_documento.selectedIndex === 0) {
            alert("Debe seleccionar un tipo de documento");
            tipo_documento.focus();
            return false;
        }
    
        // Validar que solo contengan letras
        const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        if (!soloLetras.test(nombre.value)) {
            alert("El nombre solo puede contener letras");
            nombre.focus();
            return false;
        }
        if (!soloLetras.test(apellidos.value)) {
            alert("El apellido solo puede contener letras");
            apellidos.focus();
            return false;
        }
    
        // Validar formato de email
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexEmail.test(email.value)) {
            alert("El email no es válido");
            email.focus();
            return false;
        }
    
        return true;
    };
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



//SEGUNDA OPCION 

// import listar from "./app/ciudades/listar.js";
// import llenadoDocumento from "./app/ciudades/listarDocumento.js";
// import insertar from "./app/usuarios/crear.js";

// const nombre = document.querySelector("#nombre");
// const apellidos = document.querySelector("#apellidos");
// const telefono = document.querySelector("#telefono");
// const direccion = document.querySelector("#direccion");
// const ciudad = document.querySelector("#ciudades");
// const tipo_documento = document.querySelector("#tipo");
// const documento = document.querySelector("#documento");
// const email = document.querySelector("#email");
// const politicas = document.querySelector("#politicas");

// // Obtener listas de ciudades y documentos
// const ciudades = await listar();
// const tipo_documentos = await llenadoDocumento();

// // Función para llenar el select de ciudades
// const llenadoCiudad = (ciudades, elemento) => {
//     const fragmento = document.createDocumentFragment();
//     const option = document.createElement("option");
//     option.textContent = "Seleccione ciudad...";
//     option.value = "";
//     fragmento.append(option);

//     ciudades.forEach(({ id, nombre }) => {
//         const option = document.createElement("option");
//         option.textContent = nombre;
//         option.value = id;
//         fragmento.append(option);
//     });

//     elemento.append(fragmento);
// };

// // Función para llenar el select de tipo de documento
// const llenadoDocumentos = (documentos, elemento) => {
//     const fragmento = document.createDocumentFragment();
//     const option = document.createElement("option");
//     option.textContent = "Seleccione documento...";
//     option.value = "";
//     fragmento.append(option);

//     documentos.forEach(({ id, nombre }) => {
//         const option = document.createElement("option");
//         option.textContent = nombre;
//         option.value = id;
//         fragmento.append(option);
//     });

//     elemento.append(fragmento);
// };

// // Validacion del formulario
// const validarFormulario = () => {
//     const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
//     const soloNumeros = /^[0-9]+$/;
//     const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     const campos = [
//         { campo: nombre, mensaje: "El nombre es obligatorio", regex: soloLetras, errorRegex: "El nombre solo puede contener letras" },
//         { campo: apellidos, mensaje: "El apellido es obligatorio", regex: soloLetras, errorRegex: "El apellido solo puede contener letras" },
//         { campo: telefono, mensaje: "El teléfono es obligatorio", regex: soloNumeros, errorRegex: "El teléfono solo puede contener números" },
//         { campo: direccion, mensaje: "La dirección es obligatoria" },
//         { campo: documento, mensaje: "El documento es obligatorio", regex: soloNumeros, errorRegex: "El documento solo puede contener números" },
//         { campo: email, mensaje: "El email es obligatorio", regex: regexEmail, errorRegex: "El email no tiene un formato válido" },
//     ];

//     for (const { campo, mensaje, regex, errorRegex } of campos) {
//         if (!campo || campo.value.trim() === "") {
//             alert(mensaje);
//             campo.focus();
//             return false;
//         }
//         if (regex && !regex.test(campo.value.trim())) {
//             alert(errorRegex);
//             campo.focus();
//             return false;
//         }
//     }

//     // Validar selects
//     if (!ciudad.value) {
//         alert("Debe seleccionar una ciudad");
//         ciudad.focus();
//         return false;
//     }
//     if (!tipo_documento.value) {
//         alert("Debe seleccionar un tipo de documento");
//         tipo_documento.focus();
//         return false;
//     }

//     // Validar checkbox de politicas
//     if (!politicas.checked) {
//         alert("Debe aceptar las politicas de privacidad");
//         politicas.focus();
//         return false;
//     }

//     return true;
// };

// // Guardar usuario
// const guardarUsuario = (event) => {
//     event.preventDefault();

//     if (!validarFormulario()) return; // Detener si hay errores

//     const data = {
//         nombre: nombre.value.trim(),
//         apellidos: apellidos.value.trim(),
//         ciudad: ciudad.value,
//         telefono: telefono.value.trim(),
//         direccion: direccion.value.trim(),
//         tipo_documento: tipo_documento.value,
//         documento: documento.value.trim(),
//         email: email.value.trim()
//     };

//     insertar(data);
//     alert("Usuario registrado correctamente");
// };

// // Llenar los selects
// llenadoCiudad(ciudades, ciudad);
// llenadoDocumentos(tipo_documentos, tipo_documento);

// // Agregar evento al formulario
// document.querySelector("form").addEventListener("submit", guardarUsuario);
