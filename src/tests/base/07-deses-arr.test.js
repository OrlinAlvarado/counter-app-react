
import '@testing-library/jest-dom'
import {retornaArreglo} from '../../base/07-deses-arr'
describe('Prueba en desestructuras Arreglos', () => {

    test('Debe retornar un String y numero', () => {
        
        const arr = retornaArreglo();
        expect ( arr ).toEqual(['ABC', 123]);

        const [letras, numeros] =  arr;

        expect( letras ).toBe('ABC');
        expect( typeof letras ).toBe('string');

        expect( numeros ).toBe(123);
        expect( typeof numeros ).toBe('number');
        
    })
    
    
})
