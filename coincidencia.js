function solucao(jogadas) {
  let contarUm = 0;
  for (let i = 0; i < jogadas.length; i++) {
    if (jogadas[i] === 1) contarUm++;
  }
  if (contarUm === jogadas.length / 2) console.log(true);
  else console.log(false);
}
