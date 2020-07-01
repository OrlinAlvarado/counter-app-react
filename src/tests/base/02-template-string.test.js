import '@testing-library/jest-dom'
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar Hola Orlin', () => {
        const nombre = 'Orlin';

        const saludo = getSaludo(nombre);  
        
        expect(saludo).toBe('Hola ' + nombre + '!');

    })

    //getSaludo debe retorna Hola Carlos! si no hay argumento en nombre

    test('getSaludo debe de retornar Hola Carlos!, si no hay argumentos', () => {

        const saludo = getSaludo();  
        
        expect(saludo).toBe('Hola Carlos!');

    })
    
})
