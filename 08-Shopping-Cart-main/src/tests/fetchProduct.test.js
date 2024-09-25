import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

describe('Teste a função fetchProduct', () => {
    it('fetchProduct é uma função', async () => {
      const actual = typeof fetchProduct;
      const expected = 'function';
      expect(actual).toBe(expected);
    });
  
    it('fetch é chamado ao executar fetchProduct', async () => {
      await fetchProduct(product.id);
      expect(fetch).toHaveBeenCalledWith(`https://api.mercadolibre.com/items/${product.id}`);
    });
  
    it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
      await fetchProduct(product.id);
      expect(fetch).toHaveBeenCalledWith(`https://api.mercadolibre.com/items/${product.id}`);
    });
  
    it('Verifique se chamar a função sem parâmetro retorne um erro', async () => {
      const emptySearch = '';
      await expect(fetchProduct(emptySearch)).rejects.toThrow(
        new Error('ID não informado')
      );
    });
});
