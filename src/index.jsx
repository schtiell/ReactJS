//El punto de entrada de una app ReacJS es el archivo index.js
//Lo primero es importar las librerias
//Las instrucciones pueden llevar ; o no, aunque por standar no se usa
//Las librerias React y ReactDOM permiten la renderización de la app
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//La funcion ReactDOM.render recibe 2 parametros, el elemento JSX y el contenedor a mostrarlo
//El componente <App /> importa el 
ReactDOM.render(<App />, 
    document.getElementById('root'))