function solucao(precos) {
  let minimo;
  let first = true;
  for (let i = 0; i < precos.length; i++) {
    for (let j = i + 1; j < precos.length; j++) {
      let diferenca = precos[i] - precos[j];
      if (diferenca > 0) {
        if (first) {
          minimo = diferenca;
          first = false;
        } else if (diferenca < minimo) minimo = diferenca;
      }
    }
  }
  console.log(minimo);
}
