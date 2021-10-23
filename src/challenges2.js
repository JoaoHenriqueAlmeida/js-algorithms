// Desafio 10
function techList(techArr, name) {
  return (techArr.length === 0) ? 'Vazio!' : techArr.sort().map((tech) => ({
    tech,
    name,
  }));
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const checkA = lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC);
  const checkB = lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC);
  const checkC = lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB);
  return (checkA && checkB && checkC);
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
