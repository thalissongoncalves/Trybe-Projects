import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Verifique se o componente FavoritePokemon é renderizado conforme esperado', () => {
  test('Verifique se é exibida na tela a mensagem No favorite pokemon found, caso a pessoa não tenha Pokémon favoritos', () => {
    renderWithRouter(<App />);
    const linkFavoritePokemons = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });
    userEvent.click(linkFavoritePokemons);

    const notFoundMessage = screen.getByText(/no favorite pokémon found/i);
    expect(notFoundMessage).toBeInTheDocument();
  });

  test('Teste se apenas são exibidos os Pokémon favoritados.', () => {
    renderWithRouter(<App />);
    const buttonMoreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(buttonMoreDetails);
    const favoriteMessage = screen.getByText(/pokémon favoritado\?/i);
    expect(favoriteMessage).toBeInTheDocument();
    const favoriteCheckbox = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    userEvent.click(favoriteCheckbox);
    const linkFavoritePokemons = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });
    userEvent.click(linkFavoritePokemons);
    const pokemonName = screen.queryByTestId('pokemon-name');
    expect(pokemonName).toBeInTheDocument();
  });
});
