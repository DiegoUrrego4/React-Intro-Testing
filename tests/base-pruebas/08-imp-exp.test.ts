import {
  getHeroeById,
  getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un heroe por id', () => {
    const id = 1;
    const hero = getHeroeById(id);
    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
  });

  test('getHeroeBtId debe retornar undefined si no existe el id', () => {
    const id = 100;
    const hero = getHeroeById(id);
    expect(hero).toBeFalsy();
  });

  test('Debe de retornar un arreglo con los héroes de DC', () => {
    const owner = 'DC'
    const heroesDC = getHeroesByOwner(owner);
    expect(heroesDC).toEqual([
      { id: 1, name: 'Batman', owner: 'DC' },
      { id: 3, name: 'Superman', owner: 'DC' },
      { id: 4, name: 'Flash', owner: 'DC' },
    ]);
    expect(heroesDC).toHaveLength(3);
  });

  test('Debe de retornar un arreglo con los héroes de Marvel', () => {
    const owner = 'Marvel'
    const heroesMarvel = getHeroesByOwner(owner);
    expect(heroesMarvel).toEqual([
      { id: 2, name: 'Spiderman', owner: 'Marvel' },
      { id: 5, name: 'Wolverine', owner: 'Marvel' },
    ]);
    expect(heroesMarvel.length).toBe(2);
  });
});
