const createMenu = require('../src/restaurant');
 
/*
  A função createMenu(), retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE: FAÇA OS TESTES E IMPLEMENTAÇÕES DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!
*/

describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifique se função `createMenu()` retorna um objeto que possui a chave `fetchMenu`, a qual tem como valor uma função.', () => {
    const actual = createMenu({ food: { coxinha: 3.90, sanduiche: 9.90 }, drinks: { agua: 3.90, cerveja: 6.90 } });
    const expected = {
      food: { coxinha: 3.9, sanduiche: 9.9 },
      drinks: { agua: 3.9, cerveja: 6.9 }
    };
    expect(actual.fetchMenu()).toStrictEqual(expected);
  });
  it('2: Verifique se "objetoRetornado.fetchMenu()" retorna um objeto cujas chaves são somente `food` e `drink`, considerando que a função createMenu() foi chamada com o objeto: `{ food: {}, drink: {} }`.', () => {
    const actual = createMenu({ food: {}, drinks: {} });
    const expected = { food: {}, drinks: {} };
    expect(actual.fetchMenu()).toStrictEqual(expected);
  });
  it('3: Verifique se o menu passado pra função createMenu() é idêntico ao menu recuperado pela função "objetoRetornado.fetchMenu()".', () => {
    const actual = createMenu({ food: {}, drinks: {} });
    const expected = { food: {}, drinks: {} };
    expect(actual.fetchMenu()).toStrictEqual(expected);
  });
  it('5: Verifique se "objetoRetornado.consumption", após a criação do menu, retorna um array vazio.', () => {
    const actual = createMenu({ food: {}, drinks: {} });
    const expected = [];
    expect(actual.consumption).toEqual(expected);
  });
  it('7: Verifique se, ao chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro', () => {
    const actual = createMenu({ food: { coxinha: 1.99, cigarrete: 1.99, pastel: 0.99 }, drinks: { água: 0.99 } });
    actual.order('amongus');
    const expected = 'Item indisponível!';
    expect(actual.order()).toBe(expected);
  });
  it('9: Verifique se, ao adicionar três pedidos em sequência, dentre bebidas e comidas, o array `objetoRetornado.consumption` contém os itens pedidos.', () => {
    const actual = createMenu({ food: { coxinha: 1.99, cigarrete: 1.99, pastel: 0.99 }, drinks: { água: 0.99 } });
    actual.order('coxinha, cigarrete, pastel, água');
    const expected = [ 'coxinha', 'cigarrete', 'pastel', 'água' ];
    expect(actual.consumption).toStrictEqual(expected);
  });
  it('10: Verifique se a função `order` aceita que pedidos repetidos sejam acrescidos a `consumption`.', () => {
    const actual = createMenu({ food: { coxinha: 1.99, cigarrete: 1.99, pastel: 0.99 }, drinks: { água: 0.99 } });
    actual.order('coxinha, coxinha');
    const expected = [ 'coxinha', 'coxinha' ];
    expect(actual.consumption).toStrictEqual(expected);
  });
  it('11: Verifique se, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, acrescido de 10%, conforme registrado em `objetoRetornado.consumption`.', () => {
    const actual = createMenu({ food: { coxinha: 1.99, cigarrete: 1.99, pastel: 0.99 }, drinks: { água: 0.99 } });
    actual.order('coxinha, coxinha');
    const expected = '4.38';
    expect(actual.pay()).toEqual(expected);
  })
});
