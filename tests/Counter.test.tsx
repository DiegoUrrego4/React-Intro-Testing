import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from '../src/Counter';
// TAREA: Pruebas en <CounterApp />
/**
 * test: Debe hacer match con el snapshot
 * test: Debe de mostrar el valor inicial de 100 <CounterApp value={100} />
 */

describe('Pruebas en <Counter />', () => {
  const initialValue = 10;

  test('Debe de hacer match con el snapshot', () => {
    const { container } = render(<Counter value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe de mostrar el valor inicial de 100 <CounterApp value={100} />', () => {
    render(<Counter value={100} />);
    expect(screen.getByText(100)).toBeTruthy();
  });

  test('Debe de incrementar con el botón +1', () => {
    render(<Counter value={initialValue} />);
    fireEvent.click(screen.getByText('+1'));
    expect(screen.getByText('11')).toBeTruthy();
  });

  test('Debe de funcionar con el botón -1 y hacer el decremento', () => {
    render(<Counter value={initialValue} />);
    fireEvent.click(screen.getByText('-1'));
    expect(screen.getByText('9')).toBeTruthy();
  });

  test('Debe de funcionar con el botón reset', () => {
    render(<Counter value={initialValue} />);
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    fireEvent.click(screen.getByText('+1'));
    // fireEvent.click(screen.getByText('Reset'));
    fireEvent.click(screen.getByRole('button', { name: 'btn-reset' }));
    expect(screen.getByText(initialValue)).toBeTruthy();
  });
});
