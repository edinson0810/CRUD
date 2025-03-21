const llenadoDocumento = async () =>{
    const pedir = await fetch("http://localhost:3000/tipo");
    const data = await pedir.json();
    return data;    
}

export default llenadoDocumento;