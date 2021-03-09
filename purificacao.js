function solucao(stringCorrompida) {
  // seu código aqui
  const corrompidos = ['!', '@', '#', '$', '%', '&', '*', '(', ')'];
  let stringCorrigida = '';
  for (let i = 0; i < stringCorrompida.length; i++) {
    if (!corrompidos.includes(stringCorrompida[i])) {
      stringCorrigida += stringCorrompida[i];
    }
  }
  console.log(stringCorrigida);
}
