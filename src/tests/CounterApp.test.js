import { shallow } from 'enzyme';
import React from 'react';
import CounterApp from '../CounterApp';

describe('Verificar CounterApp', () => {
    let wrapper = shallow( <CounterApp value={ 10 }/>);

    beforeEach( () => {
        wrapper = shallow( <CounterApp value={ 10 }/>);
    })

    test('Debe mostrar <CounterApp /> correctamente', () => {

        const counter = 1;
        

        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de mostrar el valor por defecto de 100', () => {
        const counter = "100";
        const wrapper = shallow( <CounterApp value={counter} />);

        const textCounter = wrapper.find('p').text();

        expect( counter ).toBe(textCounter);

    })

    test('Debe de incremenetar con el boton +1', () => {
        wrapper.find('button').at(0).simulate('click');

        const textCounter = wrapper.find('p').text();

        expect( textCounter ).toBe('11');

    })

    test('Debe de decremenetar con el boton -1', () => {
        wrapper.find('button').at(2).simulate('click');

        const textCounter = wrapper.find('p').text();

        expect( textCounter ).toBe('9');

    })

    test('Debe colocar el valor por defecto con el boton reset', () => {

        const wrapper = shallow( <CounterApp value={105} />);
        wrapper.find('button').at(0).simulate('click');

        let textCounter = wrapper.find('p').text();
        console.log(textCounter);
        wrapper.find('button').at(1).simulate('click');
        
        textCounter = wrapper.find('p').text();
        console.log(textCounter);

        expect( textCounter ).toBe('105');

    })
       
    
        
})
