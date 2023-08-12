import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Pruebas en 02-template-string', () => {
  test('getSaludo debe de retornar "Hola Diego"', () => {
    const name = 'Diego';
    const message = getSaludo(name); // EL test suite ejecuta el archivo!
    expect(message).toBe(`Hola ${name}`)
  });
});
