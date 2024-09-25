const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifique se ao passar parâmetros vazios a função tem o retorno esperado', () => {
    const actual = getOpeningHours('', '');
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });
  it('Verifique se ao passar um dia inválido no parâmetro day, a função tem o retorno esperado', () => {
    try {
      getOpeningHours('lriday', '10:00-AM');
    } catch (e) {
      expect(e.message).toBe('The day must be valid. Example: Monday');
    }
  });
  it('Verifique se ao passar uma hora inválida no parâmetro dataHour a função tem o retorno esperado', () => {
    try {
      getOpeningHours('friday', '13:00-AM');
    } catch (e) {
      expect(e.message).toBe('The hour must be between 0 and 12');
    }
  });
  it('Verifique se ao passar o parâmetro dataHour com os mínutos inválidos, a função tem o retorno esperado', () => {
    try {
      getOpeningHours('friday', '10:61-AM');
    } catch (e) {
      expect(e.message).toBe('The minutes must be between 0 and 59');
    }
  });
  it('Verifique se ao passar um dia correto, mas que não irá abrir, se ele tem o retorno esperado', () => {
    const actual = getOpeningHours('Monday', '10:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });
  it('Verifique se ao passar os parâmetros corretos para um dia e horário que esteja aberto, a função retorna o esperado', () => {
    const actual = getOpeningHours('friday', '10:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toBe(expected);
  });
  it('Verifique se ao passar os parâmetros corretos para um dia e horário que esteja fechado, a função retorna o esperado', () => {
    const actual = getOpeningHours('friday', '09:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toBe(expected);
  });
  it('Verifique se ao passar o parâmetro dataHour, se está passando a hora da forma correta e se tem o retorno esperado', () => {
    try {
      getOpeningHours('friday', 'dez horas');
    } catch (e) {
      expect(e.message).toBe('The hour should represent a number');
    }
  });
  it('Verifique se a abreviação passada no parâmetro dataHour tem o retorno esperado', () => {
    try {
      getOpeningHours('friday', '10:00-EM');
    } catch (e) {
      expect(e.message).toBe('The abbreviation must be \'AM\' or \'PM\'');
    }
  });
});
