/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
  it('Verifica se a função `numbers` retorna `true` quando o array contém apenas números e falso caso contrário', () => {
    const actual = numbers([1, 2, 3, 4, 5]);
    const expected = true;
    expect(actual).toEqual(expected);
    
  });
  // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
  it('Verifica se a função `numbers` retorna `false` quando o array contém números e strings e true caso contrário', () => {
    const actual = numbers([1, 2, '3', 4, 5]);
    const expected = false;
    expect(actual).toEqual(expected);
  })
  // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
  it('Verifica se a função `numbers` retorna `false` quando o array contém letras e números e true caso contrário', () => {
    const actual = numbers([1, 'a', 3]);
    const expected = false;
    expect(actual).toEqual(expected);
  })
  // Escreva um teste em que a função recebe [' '] e retorna false
  it('Verifica se a função `numbers` retorna `false` quando o array contém uma string vazia', () => {
    const actual = numbers([' ']);
    const expected = false;
    expect(actual).toEqual(expected);
  })
});
