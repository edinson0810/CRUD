const listar = async () => {
const pedir = await fetch("http://localhost:3000/ciudades");
const data = await pedir.json();
return data;

}

export default listar;


 export const tipo = async () => {
    const Tipo = await fetch("http://localhost:3000/tipo");
    const Data = await Tipo.json();
    return Data;
}

