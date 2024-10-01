import React from "react";

function ButtonClick(){
  const manejarClick = () => {
    alert ("¡Botón Clickeado!");
  };
  return (
    <div>
      <button onClick = {manejarClick}>Haz Cliclk en el botón</button>
    </div>
  );
}
export default ButtonClick;