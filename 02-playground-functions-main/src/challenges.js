// Desafio 1 - Crie a função compareTrue

function compareTrue(value1, value2) {
if (value1 === false && value2 === false) {
    return false;
  } else if (value1 === value2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2 - Crie a função splitSentence

function splitSentence(string) {
  return string.split(' ');
}

// Desafio 3 - Crie a função concatName

function concatName(arrayStrings) {
  for (array of arrayStrings) {
    return `${arrayStrings[arrayStrings.length - 1]}, ${arrayStrings[0]}`;
  }
}

// Desafio 4 - Crie a função footballPoints

const footballPoints = (wins, ties) => (wins * 3) + (ties * 1);

// Desafio 5 - Crie a função highestCount

const highestCount = (arrayNumbers) => {
  let highestNumber = Math.max(...arrayNumbers);
  let repetições = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (highestNumber === arrayNumbers[index]) {
      repetições += 1;
    }
  }
  return repetições;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => (base * height) / 2;

const calcRectangleArea = (base, height) => (base * height);

const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  }
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  } 
  if (form !== 'triângulo' || form !== 'retângulo') {
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
};

// Desafio 7 - Crie a função catAndMouse

function catAndMouse(mouse, cat1, cat2) {
  let value1 = mouse - cat1; // 1
  let value2 = mouse - cat2; // -1

  if (value1 > 0) {
    value1 = value1 * (+1);
  }

  if (value2 > 0) {
    value2 = value2 * (+1);
  }

  if (value1 < 0) {
    value1 = value1 * (-1);
  }

  if (value2 < 0) {
    value2 = value2 * (-1);
  }

  if (value2 < value1) {
    return 'cat2';
  }

  if (value1 < value2) {
    return 'cat1';
  }

  if (value1 === value2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz(array) {
  let divisor3 = 0;
  let divisor5 = 0;
  let arrayString = [];
  for (let index = 0; index < array.length; index += 1) {
    divisor3 = array[index] % 3;
    divisor5 = array[index] % 5;
    if (divisor3 === 0 && divisor5 === 0) {
      arrayString.push('fizzBuzz');
    } else if (divisor3 === 0) {
      arrayString.push('fizz');
    } else if (divisor5 === 0) {
      arrayString.push('buzz');
    } else {
      arrayString.push('bug!');
    }
  }
  return arrayString;
}

// Desafio 9 - Crie a função encode e a função decode

function encode(stringEncode) {
  let stringEncoded = stringEncode.split('');
  let vogalA = 1;
  let vogalE = 2;
  let vogalI = 3;
  let vogalO = 4;
  let vogalU = 5;
  for (let index = 0; index < stringEncoded.length; index += 1) {
    if (stringEncoded[index] === 'a') {
      stringEncoded[index] = vogalA;
    }
    if (stringEncoded[index] === 'e') {
      stringEncoded[index] = vogalE;
    }
    if (stringEncoded[index] === 'i') {
      stringEncoded[index] = vogalI;
    }
    if (stringEncoded[index] === 'o') {
      stringEncoded[index] = vogalO;
    }
    if (stringEncoded[index] === 'u') {
      stringEncoded[index] = vogalU;
    }
  }
  return stringEncoded.join('');
}

function decode(stringDecode) {
  let stringDecoded = stringDecode.split('');
  let number1 = 'a';
  let number2 = 'e';
  let number3 = 'i';
  let number4 = 'o';
  let number5 = 'u';
  for (let index = 0; index < stringDecoded.length; index += 1) {
    if (stringDecoded[index] === '1') {
      stringDecoded[index] = number1;
    }
    if (stringDecoded[index] === '2') {
      stringDecoded[index] = number2;
    }
    if (stringDecoded[index] === '3') {
      stringDecoded[index] = number3;
    }
    if (stringDecoded[index] === '4') {
      stringDecoded[index] = number4;
    }
    if (stringDecoded[index] === '5') {
      stringDecoded[index] = number5;
    }
  }
  return stringDecoded.join('');
}

// Desafio 10 - Crie a função techList

function techList(tech, name) {
  let arrayVazio = [];
  arrayVazio.sort();
  tech.sort();
  if (tech > arrayVazio) {
    for (let index = 0; index < tech.length; index += 1) {
      arrayVazio.push({ tech: tech [index], name: name });
    }
  } else if (tech === arrayVazio) {
    return arrayVazio;
  }
  return arrayVazio;
}

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
