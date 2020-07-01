import { getImagen } from "../../base/11-async-await";

describe('Prueba con Ascyn-await y fetch', () => {
    test('Debe retornar el url', async() => {
        const url = await getImagen();

        expect(url.includes('https://')).toBe(true);
    });

});