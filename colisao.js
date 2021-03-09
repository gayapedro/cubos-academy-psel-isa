function solucao(velocidade, aceleracao, distanciaObjeto) {
  //seu código aqui
  const d = (-1 * velocidade * velocidade) / (2 * aceleracao);
  if (d > distanciaObjeto) {
    console.log('COLISAO A FRENTE');
  } else if (d === distanciaObjeto) {
    console.log('NAO ACELERE');
  } else {
    console.log('CAMINHO SEGURO');
  }
}
