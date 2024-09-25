import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

const link = '/pokemon/25';

describe('Verifique se o componente Pokedex é renderizado conforme esperado', () => {
  describe('Teste se é renderizado um card com as informações de determinado Pokémon:', () => {
    it('O nome correto do Pokémon deve ser mostrado na tela;', () => {
      renderWithRouter(<App />);
      const namePikachu = screen.getByText(/pikachu/i);
      expect(namePikachu).toBeInTheDocument();
    });
    it('O tipo correto do Pokémon deve ser mostrado na tela;', () => {
      renderWithRouter(<App />);
      const pokemonType = screen.queryByTestId('pokemon-type');
      expect(pokemonType).toHaveTextContent('Electric');
    });
    it('O peso médio do Pokémon deve ser exibido com um texto no formato Average weight: <value> <measurementUnit>; onde <value> e <measurementUnit> são, respectivamente, o peso médio do Pokémon e sua unidade de medida;', () => {
      renderWithRouter(<App />);
      const pokemonWeight = screen.queryByTestId('pokemon-weight');
      expect(pokemonWeight).toHaveTextContent('Average weight: 6.0 kg');
    });
    it('A imagem do Pokémon deve ser exibida. Ela deve conter um atributo src com a URL da imagem e um atributo alt com o texto <name> sprite, onde <name> é o nome do Pokémon.', () => {
      renderWithRouter(<App />);
      const pokemonImg = screen.getByRole('img', {
        name: /pikachu sprite/i,
      });
      expect(pokemonImg).toBeInTheDocument();
      expect(pokemonImg.getAttribute('src')).toEqual('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    });
  });
  it('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon. O link deve possuir a URL /pokemon/<id>, onde <id> é o id do Pokémon exibido;', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    expect(moreDetails).toBeInTheDocument();
    expect(moreDetails.getAttribute('href')).toEqual(link);
  });
  it('Teste se ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon', () => {
    const { history } = renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);
    const { pathname } = history.location;
    expect(pathname).toBe(link);
    const pokemonDetails = screen.getByRole('heading', {
      name: /pikachu details/i,
    });
    expect(pokemonDetails).toBeInTheDocument();
  });
  it('Teste também se a URL exibida no navegador muda para /pokemon/<id>, onde <id> é o id do Pokémon cujos detalhes se deseja ver', () => {
    const { history } = renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    expect(moreDetails).toBeInTheDocument();
    userEvent.click(moreDetails);
    const { pathname } = history.location;
    expect(pathname).toBe(link);
    const pokemonDetails = screen.getByRole('heading', {
      name: /pikachu details/i,
    });
    expect(pokemonDetails).toBeInTheDocument();
  });
  describe('Teste se existe um ícone de estrela nos Pokémon favoritados:', () => {
    it('O ícone deve ser uma imagem com o atributo src contendo o caminho /star-icon.svg', () => {
      const { history } = renderWithRouter(<App />);
      const moreDetails = screen.getByRole('link', {
        name: /more details/i,
      });
      expect(moreDetails).toBeInTheDocument();
      userEvent.click(moreDetails);
      const { pathname } = history.location;
      expect(pathname).toBe(link);
      const pokemonDetails = screen.getByRole('heading', {
        name: /pikachu details/i,
      });
      expect(pokemonDetails).toBeInTheDocument();
      const check = screen.getByRole('checkbox', {
        name: /pokémon favoritado\?/i,
      });
      userEvent.click(check);
      const favorite = screen.getByRole('img', {
        name: /pikachu is marked as favorite/i,
      });
      expect(favorite).toBeInTheDocument();
      expect(favorite.getAttribute('src')).toEqual('/star-icon.svg');
    });
  });
});
