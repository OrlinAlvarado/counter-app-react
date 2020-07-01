import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";

import heroes from '../../data/heroes';


describe('Pruebas de funciones de Heroes', () => {
    test('Debe de retornar un heroe por id', () => {

        const id = 1;

        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id == id);

        expect(heroe).toEqual(heroeData);
    });

    test('Debe de retornar undefined si heroe no existe', () => {

        const id = 10;

        const heroe = getHeroeById(id);


        expect(heroe).toBe(undefined);
    });

    test('Debe de retornar los heroes de DC', () => {

        const owner = 'DC';

        const _heroes = getHeroesByOwner(owner);

        const heroesData = heroes.filter(h => h.owner == owner);

        expect(heroesData).toEqual(_heroes);
    });

    test('Debe de retornar los heroes de Marvel', () => {

        const owner = 'Marvel';

        const _heroes = getHeroesByOwner(owner);

        expect(_heroes.length).toEqual(2);
    });


});