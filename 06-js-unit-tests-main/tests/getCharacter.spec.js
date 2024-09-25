/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

/*
A função getCharacter recebe uma string que representa o nome de um personagem e retorna um objeto contendo seu nome, sua classe e suas frases.

O retorno será de acordo com a seguinte relação:

 Parâmetro    |      Nome       |    Classe   |              Frases
 da função    |                 |             |
----------------------------------------------------------------------------------
"Arya"        |   Arya Stark    |    Rogue    | 'Not today', 'A girl has no name.'
"Brienne"     |  Brienne Tarth  |    Knight   | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
"Melissandre" |   Melissandre   | Necromancer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

- Se o parâmetro não estiver na tabela, a função retorna `undefined`.
- Se o parâmetro estiver, a função retorna um objeto no formato abaixo:

  {
    name: 'Nome do Personagem',
    class: 'Classe do Personagem' ,
    phrases: ['frase1', 'frase2']
  }

- OBS.: O parâmetro não é CASE SENSITIVE, ou seja, não faz diferenças entre maiúsculas e minúsculas. Portanto Arya, ArYa e ARYA têm o mesmo resultado.

Escreva pelo menos seis testes para essa função garantindo que a implementação de getCharacter está correta.

Parâmetros:
  - Uma string.

Comportamento: 
  - getCharacter('Arya');

Retorno:
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: [ 'Not today', 'A girl has no name.' ]
}
*/

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('1. Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.', () => {
    const actual = getCharacter();
    const expected = undefined;
    expect(actual).toBe(expected);
  });
  it('2. Teste se a função retorna o objeto correto para o parâmetro "Arya".', () => {
    const actual = getCharacter('Arya');
    const expected = {
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: [ 'Not today', 'A girl has no name.' ]
    };
    expect(actual).toStrictEqual(expected);
  });
  it('3. Teste se a função retorna o objeto correto para o parâmetro "Brienne".', () => {
    const actual = getCharacter('Brienne');
    const expected = {
      name: 'Brienne Tarth',
      class: 'Knight',
      phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'],
    };
    expect(actual).toStrictEqual(expected);
  });
  it('4. Teste se a função retorna o objeto correto para o parâmetro "Melissandre".', () => {
    const actual = getCharacter('Melissandre');
    const expected = {
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'],
    };
    expect(actual).toStrictEqual(expected);
  });
  it('5. Teste se o parâmetro não é Case Sensitive, ou seja, independente de conter letras maiúsculas ou minúsculas retorna o mesmo objeto relativo a ele.', () => {
    const actual = getCharacter('Melissandre');
    const actual2 = getCharacter('melissandre');
    const actual3 = getCharacter('MELISSANDRE');
    const actual4 = getCharacter('MeLiSsAnDrE');
    const expected = {
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'],
    };
    expect(actual).toStrictEqual(expected);
    expect(actual2).toStrictEqual(expected);
    expect(actual3).toStrictEqual(expected);
    expect(actual4).toStrictEqual(expected);
  });
  it('6. Teste se ao passar um nome que não está na tabela, a função retorna undefined.', () => {
    const actual = getCharacter('Alucard');
    const expected = undefined;
    expect(actual).toStrictEqual(expected);
  });
});
