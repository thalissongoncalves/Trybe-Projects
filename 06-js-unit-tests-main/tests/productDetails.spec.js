const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Teste se productDetails é uma função.', () => {
    expect(typeof productDetails).toBe('function');
  });
  it('Teste se o retorno da função é um array.', () => {
    const actual = productDetails('café', 'café');
    const expected = [
      { name: 'café', details: { productId: 'café123' } },
      { name: 'café', details: { productId: 'café123' } }
    ];
    expect(actual).toStrictEqual(expected);
  })
  it('Teste se o array retornado pela função contém dois itens dentro.', () => {
    const actual = productDetails('café', 'café');
    const expected = 2;
    expect(actual.length).toEqual(expected);
  })
  it('Teste se os dois itens dentro do array retornado pela função são objetos.', () => {
    const actual = productDetails('café', 'café');
    const expected = 'object';
    expect(typeof actual).toBe(expected);
  })
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.', () => {
    const actual = productDetails('cafézal', 'café');
    const expected = [
      { name: 'cafézal', details: { productId: 'cafézal123' } },
      { name: 'café', details: { productId: 'café123' } }
    ];
    expect(actual).toStrictEqual(expected);
  })
  it('Teste se os dois productIds terminam com 123.', () => {
    const actual = productDetails('cafézal', 'café');
    const expected = [
      { name: 'cafézal', details: { productId: 'cafézal123' } },
      { name: 'café', details: { productId: 'café123' } }
    ];
    expect(actual).toStrictEqual(expected);
  })
});