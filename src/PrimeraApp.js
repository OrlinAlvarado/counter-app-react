//import React, { Fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ( { saludo, subtitulo } ) => {
    // const saludo = 'Hola mundo';
    // const saludo = {
    //     nombre: 'Orlin',
    //     edad: 20
    // };
    // const saludo = 'Hola mundo';

    // const { saludo } =  props;

    // console.log(props);

    return (
        <>
            {/* <pre> { JSON.stringify(saludo, null, 3) }</pre> */}
            <h1>{ saludo }!!!</h1>
            <p>{ subtitulo }</p>
        </>    
    );
}

PrimeraApp.propTypes = {
    saludo:PropTypes.string.isRequired,
    otra: PropTypes.number
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;