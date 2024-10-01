//EJERCICIO 1: MANEJO DE EVENTOS.
import React from "react";
import ButtonClick from "./Components/ButtonClick";

function App(){
  
  return (
    <div>
      <ButtonClick/>
    </div>
  );
}
export default App;


//EJERCICIO 2: CREACION Y GESTION DE FORMULARIOS.
// import React from "react";
// import FormularioUsuario from "./Components/FormularioUsuario";


// function App(){
//   return(
//     <div>
//       <FormularioUsuario/>
//     </div>
//   );
// }
// export default App;


// //EJERCICIO 3: LIFTHING STATE UP
// import React, { useState } from "react";
// import Formulario from "./Components/Formulario";
// import Resultado from "./Components/Resultado";

// function App(){
//   const [numero, setNumero] = useState(0);
//   return (
//     <div>
//       <Formulario numeroIngresado ={setNumero}/>
//       <Resultado numero = {numero}/>
//     </div>
//   );
// }
// export default App;