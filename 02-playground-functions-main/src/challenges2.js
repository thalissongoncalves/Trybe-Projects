// Desafio 11 - Crie a função generatePhoneNumber

function generatePhoneNumber(array) {
  if(array.length !== 11) {
    return 'Array com tamanho incorreto.';
  } 

  for(let index = 0; index < array.length; index += 1) {
    if(array[index] < 0) {
    return 'não é possível gerar um número de telefone com esses valores';
    }
  } 

  for(let index = 0; index < array.length; index += 1) {
    if(array[index] > 9) {
    return 'não é possível gerar um número de telefone com esses valores';
    }
  } 

  for(let index = 0; index < array.length; index += 1) {
    let count = 0;
    for(let index2 = 0; index2 < array.length; index2 += 1) {
      if(array[index] === array[index2]) {
        count += 1;
      }
    }
    if (count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return `(${array[0]}${array[1]}) ${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
}
  

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12 -  Crie a função triangleCheck

const triangleCheck = (lineA, lineB, lineC) => 
lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) ? true:false && 
lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) ? true:false && 
lineC < lineA + lineB && lineC > Math.abs(lineA - lineB) ? true:false;


console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(2, 3, 4));
console.log(triangleCheck(16, 20, 30));

console.log(triangleCheck(16, 9, 2));
console.log(triangleCheck(3, 10, 4));
console.log(triangleCheck(2, 2, 6));

console.log(triangleCheck(10, 13, 2));
console.log(triangleCheck(17, 4, 12));
console.log(triangleCheck(3, 5, 10));

// Desafio 13 - Crie a função hydrate

function hydrate(string) {
    let numsStr = string.replace(/[^0-9]/g,'');
    let arrayStr = numsStr.split('');
    let arrayNumber = arrayStr.map(Number);
    let soma = 0;
    for(let index = 0; index < arrayNumber.length; index += 1) {
      soma += arrayNumber[index];
    }
    if(soma > 1) {
      return `${soma} copos de água`;
    } else {
      return `${soma} copo de água`;
    }
}

console.log(hydrate('1 cachaça'));

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
