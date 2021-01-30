//importación de librerias y compornentes
import React from 'react'
import './App.css'

//función del componente Arrow Function o funcion flecha son el standar de ECMASCRIPT 6
// () Son la parte de la función que espera los parametros
// {} Son la para indicar el cuerpo de la función
//return () envía el código JSX para ser renderizado por el componente index.jsx
const App = () => {
    //Mensaje a la consola del navegador
    console.log('Renderizado del primer componente App.jsx')
    return (
        <div className="react-calculator"> 
            Hola Mundo desde ReactJS!!!
        </div>
    )
}

//Exportación de los componentes
export default App