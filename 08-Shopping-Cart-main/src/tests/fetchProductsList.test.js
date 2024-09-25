import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', async () => {
    const actual = typeof fetchProductsList;
    const expected = 'function';
    expect(actual).toBe(expected);
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).to.be.calledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).to.be.calledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Verifique se chamar a função sem parâmetro retorne um erro', async () => {
    const emptySearch = '';
    await expect(fetchProductsList(emptySearch)).rejects.toThrow(
      new Error('Termo de busca não informado')
    );
  });
});
