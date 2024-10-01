import React from "react";

function Formulario ({numeroIngresado}){
    const manejarCambio = (evento) => {
        numeroIngresado (evento.target.value);
    }
    return (
        <div>
            <label>
                Introduzca un numero:
                <input type = "number" onChange = {manejarCambio}/>
            </label>
        </div>
    );
}
export default Formulario;