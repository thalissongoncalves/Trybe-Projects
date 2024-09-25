import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela:', () => {
  it('A página deve conter um texto <name> Details, onde <name> é o nome do Pokémon;', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(moreDetails);
    const titleDetails = screen.getByRole('heading', {
      name: /pikachu details/i,
    });
    expect(titleDetails).toBeInTheDocument();
  });
  it('Não deve existir o link de navegação para os detalhes do Pokémon selecionado;', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(moreDetails);
    expect(moreDetails).not.toBeVisible();
  });
  it('A seção de detalhes deve conter um heading h2 com o texto Summary;', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(moreDetails);
    const summary = screen.getByRole('heading', {
      name: /summary/i,
    });
    expect(summary).toBeInTheDocument();
  });
  it('A seção de detalhes deve conter um parágrafo com o resumo do Pokémon específico sendo visualizado.', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(moreDetails);
    const paragraph = screen.getByText(
      /this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat\./i,
    );
    expect(paragraph).toBeInTheDocument();
  });
});
describe('Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon:', () => {
  it('Na seção de detalhes deverá existir um heading h2 com o texto Game Locations of <name>; onde <name> é o nome do Pokémon exibido;', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(moreDetails);
    const gameLocations = screen.getByRole('heading', {
      name: /game locations of pikachu/i,
    });
    expect(gameLocations).toBeInTheDocument();
  });
  it('Todas as localizações do Pokémon devem ser mostradas na seção de detalhes;', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(moreDetails);
    const location1 = screen.getByText(/kanto viridian forest/i);
    const location2 = screen.getByText(/kanto power plant/i);
    expect(location1).toBeInTheDocument();
    expect(location2).toBeInTheDocument();
  });
  it('Devem ser exibidos o nome da localização e uma imagem do mapa em cada localização;', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(moreDetails);
    const img = screen.getAllByRole('img', {
      name: /pikachu location/i,
    });
    expect(img[0].getAttribute('src')).toEqual('https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(img[1].getAttribute('src')).toEqual('https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
  });
});
describe('Teste se o usuário pode favoritar um Pokémon através da página de detalhes:', () => {
  it('A página deve exibir um checkbox que permite favoritar o Pokémon;', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(moreDetails);
    const check = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    expect(check).toBeInTheDocument();
  });
  it('Cliques alternados no checkbox devem adicionar e remover respectivamente o Pokémon da lista de favoritos;', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', {
      name: /more details/i,
    });
    userEvent.click(moreDetails);
    const check = screen.getByRole('checkbox', {
      name: /pokémon favoritado\?/i,
    });
    userEvent.click(check);
    const favoriteLink = screen.getByRole('link', {
      name: /favorite pokémon/i,
    });
    userEvent.click(favoriteLink);
    const favoriteImg = screen.getByRole('img', {
      name: /pikachu is marked as favorite/i,
    });
    expect(favoriteImg).toBeInTheDocument();
    userEvent.click(moreDetails);
    userEvent.click(check);
    userEvent.click(favoriteLink);
  });
});
