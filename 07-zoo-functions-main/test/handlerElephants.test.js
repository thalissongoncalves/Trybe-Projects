const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Teste se a função HandlerElephants() contém o retorno esperado ao receber o parâmetro "count".', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toBe(expected);
  });
  it('Teste se a função HandlerElephants() contém o retorno esperado ao receber o parâmetro vazio', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toBe(expected);
  });
  it('Teste se a função HandlerElephants() contém o retorno esperado ao receber algo diferente de strings', () => {
    const actual = handlerElephants(10);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toBe(expected);
  });
  it('Teste se a função HandlerElephants() contém o retorno esperado ao receber o parâmetro "names".', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });
  it('Teste se a função HandlerElephants() contém o retorno esperado ao receber o parâmetro "averageAge".', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toBe(expected);
  });
  it('Teste se a função HandlerElephants() contém o retorno esperado ao receber o parâmetro "names" recebe um array de nomes e se ele contém o nome "Jefferson".', () => {
    const actual = handlerElephants('names');
    const expected = 'Jefferson';
    expect(actual).toContain(expected);
  });
  it('Teste se a função HandlerElephants() contém o retorno esperado ao receber o parâmetro que não contém em nenhuma das funções como condição', () => {
    const actual = handlerElephants('café');
    const expected = null;
    expect(actual).toBe(expected);
  });
  it('Teste se a função HandlerElephants() contém o retorno esperado ao receber o parâmetro que já contém no objeto retornado pelo getElephants()', () => {
    const actual = handlerElephants('id');
    const expected = 'bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5';
    expect(actual).toBe(expected);
  });
});
