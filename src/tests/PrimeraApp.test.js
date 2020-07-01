import { render } from '@testing-library/react';
import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

import PrimeraApp from '../PrimeraApp'

describe('Pruebas en <PrimeraApp />', () => {
    // test('Debe mostrar el mensaje Hola Mundo', () => {
    //     const saludo = 'Hola mundo';
    //     const { getByText } = render( <PrimeraApp saludo={ saludo }/>);
    //     // expect( getByText(saludo) ).toBeInTheDocument();
    // });

    test('Debe de mostar <PrimeraApp /> correctamente', () => {
        const saludo = 'Hola mundo';
        const wrapper = shallow( <PrimeraApp saludo={ saludo }/>);

        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe mostrar el subtitulo', () => {
        const saludo = 'Hola mundo';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow( 
            <PrimeraApp saludo={ saludo } subtitulo={ subtitulo }/>
        );

        const textParrafo = wrapper.find('p').text();

        expect ( textParrafo ).toBe(subtitulo);

    })
    
    
});
