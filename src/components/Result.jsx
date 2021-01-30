//importación de librerias
import React from 'react'

//Arrow Function del componente o construcción del componente funcional

//Object Destructuring o destructuración de objetos
/*
const Result = (props) => {
    const { value } = props
    return(
        <div className="result">
            <span> {value} </span>
        </div>
    )
}
*/

//Destructuring permite un código mucho mas reducido y limpio
const Result = ({ value, value2}) => {
    console.log('Renderizado del componente Result.jsx', value)
    return(
        <div className="result">
            <span> {value} </span>
        </div>
    )
} 

//Exportación del componente
export default Result