import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Verifique se o componente Pokedex é renderizado conforme esperado', () => {
  it('Teste se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);
    const encuonteredTitle = screen.getByRole('heading', {
      name: /encountered pokémon/i,
      level: 2,
    });
    expect(encuonteredTitle).toBeInTheDocument();
  });

  it('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
    renderWithRouter(<App />);
    const namePokemon = screen.getByTestId('pokemon-name');
    expect(namePokemon).toHaveTextContent('Pikachu');
    const buttonNext = screen.getByRole('button', {
      name: /próximo pokémon/i,
    });
    expect(buttonNext).toBeInTheDocument();
    expect(buttonNext).toBeVisible();
    userEvent.click(buttonNext);
    expect(namePokemon).toHaveTextContent('Charmander');
    userEvent.click(buttonNext);
    expect(namePokemon).toHaveTextContent('Caterpie');
    userEvent.click(buttonNext);
    expect(namePokemon).toHaveTextContent('Ekans');
    userEvent.click(buttonNext);
    expect(namePokemon).toHaveTextContent('Alakazam');
    userEvent.click(buttonNext);
    expect(namePokemon).toHaveTextContent('Mew');
    userEvent.click(buttonNext);
    expect(namePokemon).toHaveTextContent('Rapidash');
    userEvent.click(buttonNext);
    expect(namePokemon).toHaveTextContent('Snorlax');
    userEvent.click(buttonNext);
    expect(namePokemon).toHaveTextContent('Dragonair');
    userEvent.click(buttonNext);
    expect(namePokemon).toHaveTextContent('Pikachu');
  });

  it('Teste se é mostrado apenas um Pokémon por vez;', () => {
    renderWithRouter(<App />);
    const pokemonName = screen.getByText(/pikachu/i);
    expect(pokemonName).toBeVisible();
    const button = screen.getByRole('button', { name: /próximo pokémon/i });
    userEvent.click(button);
    const nextPokemonName = screen.getByText(/charmander/i);
    expect(nextPokemonName).toBeVisible();
    userEvent.click(button);
    const thirdPokemonName = screen.getByText(/caterpie/i);
    expect(thirdPokemonName).toBeVisible();
    userEvent.click(button);
    expect(pokemonName).toBeVisible();
  });

  describe('Teste se a Pokédex tem os botões de filtro:', () => {
    it('Deve existir um botão de filtragem para cada tipo de Pokémon, sem repetição;', () => {
      renderWithRouter(<App />);
      const buttons = screen.getAllByTestId('pokemon-type-button');
      const valueButtons = Object.values(buttons);
      expect(valueButtons[0]).toHaveTextContent('Electric');
      expect(valueButtons[1]).toHaveTextContent('Fire');
      expect(valueButtons[2]).toHaveTextContent('Bug');
      expect(valueButtons[3]).toHaveTextContent('Poison');
      expect(valueButtons[4]).toHaveTextContent('Psychic');
      expect(valueButtons[5]).toHaveTextContent('Normal');
      expect(valueButtons[6]).toHaveTextContent('Dragon');
    });
    it('A partir da seleção de um botão de tipo, a Pokédex deve circular somente pelos Pokémon daquele tipo;', () => {
      renderWithRouter(<App />);
      const buttonFire = screen.getByRole('button', {
        name: /fire/i,
      });
      userEvent.click(buttonFire);
      const pokemonType = screen.queryByTestId('pokemon-type');
      expect(pokemonType).toHaveTextContent('Fire');
    });
    it('O texto do botão deve corresponder ao nome do tipo, ex. Psychic;', () => {
      renderWithRouter(<App />);
      const buttons = screen.getAllByTestId('pokemon-type-button');
      const buttonNames = buttons.map((button) => button.textContent);
      const expectedNames = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
      expect(buttonNames).toEqual(expectedNames);
    });
    it('O botão All precisa estar sempre visível.', () => {
      renderWithRouter(<App />);
      const buttonAll = screen.getByRole('button', {
        name: /all/i,
      });
      expect(buttonAll).toBeInTheDocument();
    });
  });

  describe('Teste se a Pokédex contém um botão para resetar o filtro:', () => {
    it('O texto do botão deve ser All;', () => {
      renderWithRouter(<App />);
      const buttonAll = screen.getByText(/all/i);
      expect(buttonAll).toHaveTextContent(/all/i);
    });
    it('A Pokedéx deverá mostrar os Pokémon normalmente (sem filtros) quando o botão All for clicado;', () => {
      renderWithRouter(<App />);
      const buttonAll = screen.getByRole('button', {
        name: /all/i,
      });
      userEvent.click(buttonAll);
    });
    it('Ao carregar a página, o filtro selecionado deverá ser All.', () => {
      renderWithRouter(<App />);
      const pokemons = ['Charmander', 'Caterpie', 'Ekans', 'Alakazam', 'Mew', 'Rapidash', 'Snorlax', 'Dragonair', 'Pikachu'];
      const fireButton = screen.getByRole('button', {
        name: /fire/i,
      });
      userEvent.click(fireButton);
      const charmander = screen.getByText(/charmander/i);
      expect(charmander).toBeInTheDocument();
      const allButton = screen.getByRole('button', {
        name: /all/i,
      });
      userEvent.click(allButton);
      pokemons.forEach((pokemon) => {
        const nextPokemonButton = screen.getByRole('button', {
          name: /próximo pokémon/i,
        });
        userEvent.click(nextPokemonButton);
        const pokemonName = screen.getByText(pokemon);
        expect(pokemonName).toBeInTheDocument();
      });
    });
  });
});
