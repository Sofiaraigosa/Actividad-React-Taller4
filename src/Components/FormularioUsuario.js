import React, {useState} from "react";

function FormularioUsuario (){
    const [nombre, setNombre] =  useState("");
    const [nombreMostrado, setNombreMostrado] = useState("");
    const manejarCambio = (evento) => {
       setNombre(evento.target.value);
    };
    const manejarEnvio = (evento) => {
        evento.preventDefault();
        setNombreMostrado(nombre);

    }
    return (
        <div>
             <form onSubmit={manejarEnvio}>
            <label>
                Nombre:
                <input type = "text" value = {nombre} onChange= {manejarCambio}/>
            </label>
            <button type = "submit">Enviar</button>
        </form>
        {setNombreMostrado && <h3>Hola, {nombreMostrado}</h3>}
        </div>
       
    );
}
export default FormularioUsuario;