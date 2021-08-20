// Desafio 1
function compareTrue(value1, value2) {
  return value1 === true && value2 === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(String) {
  return String.split(' ');
  /* Método String split () utilizado para separar uma string em um array de strings, nesse caso, o programa pede que retorne cada palavra como um elemento separado do array.
  Método retirado de: https://www.w3schools.com/jsref/jsref_split.asp
*/
}

// Desafio 4
function concatName(Array) {
  return `${Array[Array.length - 1]}, ${Array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numberArray) {
  const highestArrayNumber = numberArray.reduce((acc, curr) => (curr > acc ? curr : acc));
  return numberArray.filter((element) => element === highestArrayNumber).length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  let draw = 'os gatos trombam e o rato foge';

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } if (distanceCat1 === distanceCat2) {
    return draw;
  }
}

// Desafio 8
function fizzBuzz(numberArray) {
  return numberArray.map((element) => {
    const fizzBuzzString = (element % 3 === 0 && element % 5 === 0);
    const fizz = (element % 3 === 0);
    const buzz = (element % 5 === 0);
    if (fizzBuzzString) {
      return 'fizzBuzz';
    } if (fizz) {
      return 'fizz';
    } if (buzz) {
      return 'buzz';
    }
    return 'bug!';
  });
}

// Desafio 9
function encode(String) {
  const newArray = String.split('');
  const changeA = newArray.map((element) => (element === 'a' ? '1' : element));
  const changeE = changeA.map((element) => (element === 'e' ? '2' : element));
  const changeI = changeE.map((element) => (element === 'i' ? '3' : element));
  const changeO = changeI.map((element) => (element === 'o' ? '4' : element));
  const changeU = changeO.map((element) => (element === 'u' ? '5' : element));
  return changeU.join('');
}

function decode(String) {
  const newArray = String.split('');
  const changeA = newArray.map((element) => (element === '1' ? 'a' : element));
  const changeE = changeA.map((element) => (element === '2' ? 'e' : element));
  const changeI = changeE.map((element) => (element === '3' ? 'i' : element));
  const changeO = changeI.map((element) => (element === '4' ? 'o' : element));
  const changeU = changeO.map((element) => (element === '5' ? 'u' : element));
  return changeU.join('');
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
