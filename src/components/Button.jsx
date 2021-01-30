//importación de librerias
import React from 'react'
import Proptypes from 'prop-types'

//Construcción del componente funcional con arrow function
const Button = ({type, text}) => {
    return (
        <button className={type}>
            <span> {text} </span>
        </button>
    )
}


//Validaciones proptypes
Button.propTypes = {
    text: Proptypes.string.isRequired,
    type: Proptypes.number.isRequired
}


Button.defaultsProps = {
    text: undefined,
    type: 0
}

//Expotación del componente
export default Button