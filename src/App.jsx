//importación de librerias y compornentes
//Por convención ES6 los componentes se importan despues de las librerias en orden alfabético y antes de los css
import React from 'react'
import Button from './components/Button'
import Result from './components/Result'
import './App.css'

//función del componente Arrow Function o funcion flecha son el standar de ECMASCRIPT 6
// () Son la parte de la función que espera los parametros
// {} Son la para indicar el cuerpo de la función
//return () envía el código JSX para ser renderizado por el componente index.jsx
const App = () => {
    //Mensaje a la consola del navegador
    console.log('Renderizado del primer componente App.jsx')
    return (
        <main className="react-calculator"> 
            <Result valuer={0} />
            <div className="number">
                <Button type={1} text="1" />
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>10</button>
            </div>
            <div className="functions">
                <button>clear</button>
                <button>r</button>
            </div>
            <div className="math-opations">
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
                <button>=</button>
            </div>
        </main>
    )
}

//Exportación de los componentes
export default App