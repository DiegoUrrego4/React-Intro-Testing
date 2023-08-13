import React from 'react';
import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
  // test('Debe de hacer match con el snapshot()', () => {
  //   const title = 'Hola, soy Gokú';
  //   const { container } = render(<FirstApp title={title} />);
  //   expect(container).toMatchSnapshot();
  // });

  test('Debe de mostrar el titulo en un h1', () => {
    const title = 'Hola, soy Gokú';
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    // Con esto me aseguro que exista el título
    expect(getByText(title)).toBeTruthy();
    // const h1 = container.querySelector('h1');
    // expect(h1?.innerHTML).toContain(title);
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('Debe de mostrar el subtitulo mostrado por props', () => {
    const title = 'Hola, soy Gokú';
    const subTitle = 'Soy un subtitulo';
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );
    expect(getAllByText(subTitle).length).toBe(2); // Esto devuelve un array de elementos
  });
});
