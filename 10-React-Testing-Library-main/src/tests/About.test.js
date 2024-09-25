import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('Verifique se o componente About é renderizado conforme esperado', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const aboutTitle = screen.getByRole('heading', {
      name: /about pokédex/i,
      level: 2,
    });
    expect(aboutTitle).toBeInTheDocument();
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const firstText = screen.getByText(/this application simulates a pokédex, a digital encyclopedia containing all pokémon/i);
    const secondText = screen.getByText(
      /one can filter pokémon by type, and see more details for each one of them/i,
    );
    expect(firstText).toBeInTheDocument();
    expect(secondText).toBeInTheDocument();
  });

  test('Teste se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png.', () => {
    renderWithRouter(<About />);
    const aboutImage = screen.getByRole('img', {
      name: /pokédex/i,
    });
    expect(aboutImage).toBeInTheDocument();
    expect(aboutImage.getAttribute('src')).toEqual('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
