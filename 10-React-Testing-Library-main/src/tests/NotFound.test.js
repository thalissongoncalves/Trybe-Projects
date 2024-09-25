import React from 'react';
import { act, screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Verifique se o componente NotFound é renderizado conforme esperado', () => {
  test('Teste se a página contém um heading h2 com o texto Page requested not found', () => {
    const { history } = renderWithRouter(<NotFound />);
    act(() => {
      history.push('/pagina/que-nao-existe/');
    });
    const notFoundTitle = screen.getByRole('heading', {
      name: /page requested not found/i,
    });
    expect(notFoundTitle).toBeInTheDocument();
  });

  test('Teste se a página mostra a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif.', () => {
    const { history } = renderWithRouter(<NotFound />);
    act(() => {
      history.push('/pagina/que-nao-existe/');
    });
    const notFoundImage = screen.getByRole('img', {
      name: /pikachu crying because the page requested was not found/i,
    });
    expect(notFoundImage).toBeInTheDocument();
    expect(notFoundImage.getAttribute('src')).toEqual('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
