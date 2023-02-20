
import { render, screen } from '@testing-library/react';
import LoginPage from '../pages/loginPage';
import {describe, expect, test} from '@jest/globals';


describe('Debería existir un texto Email', () => {
  test('texto Email', () => {
    render(<LoginPage/>);
    const linkElement = screen.getByText(/Email/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('Debería existir un texto Contraseña', () => {
    test('texto Contraseña', () => {
      render(<LoginPage/>);
      const linkElement = screen.getByText(/Contraseña/i);
      expect(linkElement).toBeInTheDocument();
    });
  });

describe('Debería existir un imput de tipo contraseña', () => {
test('input de tipo contraseña', () => {

    render(<LoginPage/>);
    const linkElement = screen.getAllByLabelText("input");
    expect(linkElement).toBeInTheDocument();

});

});