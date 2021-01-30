//importación de librerias
import React from 'react'
import Proptypes from 'prop-types'

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
const Result = ({ value }) => {
    console.log('Renderizado del componente Result.jsx', value)
    return(
        <div className="result">
            <span> {value} </span>
        </div>
    )
} 

//Validación del tipo de dato de la propiedad y que sea requerido forzosamente
Result.propTypes = {
    value: Proptypes.number.isRequired
}

//Estableciendo valores por default cuando la propiedad no es enviada al componente desde el lugar donde es llamado
Result.defaultProps = {
    value: 100
}

//Exportación del componente
export default Result