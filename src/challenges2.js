// Desafio 10
function techList(techArr, name) {
  return (techArr.length === 0) ? 'Vazio!' : techArr.sort().map((tech) => ({
    tech,
    name,
  }));
}

// Desafio 11
function generatePhoneNumber(numberArray) {
  // const elementOcurrences = numberArray.reduce(function (acc, curr) {
  //   const verification = acc[curr] ? acc[curr] + 1 : acc[curr] = 1;
  //   return verification;
  // }, {});
  // const getInvalidOcurrences = Object.values(elementOcurrences).filter((element) => element > 3);

  // if (getInvalidOcurrences.length > 0 || numberArray.map((number) => (number > 9 || number < 0))) {
  //   return 'não é possível gerar um número de telefone com esses valores';
  // }
  // if (numberArray.length !== 11) {
  //   return 'Array com tamanho incorreto.';
  // }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
