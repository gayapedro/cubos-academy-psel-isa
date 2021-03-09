function solucao(
  produtos,
  distanciaRestaurante,
  cupomDesconto,
  ehPrimeiraCompra
) {
  // seu código aqui
  let salgado = 0,
    doce = 0,
    bebida = 0,
    preco = 0,
    frete = 0;
  frete = distanciaRestaurante * 120;
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].categoria === 'SALGADO') {
      salgado += produtos[i].valor * produtos[i].quantidade;
    } else if (produtos[i].categoria === 'DOCE') {
      doce += produtos[i].valor * produtos[i].quantidade;
    } else if (produtos[i].categoria === 'BEBIDA') {
      bebida += produtos[i].valor * produtos[i].quantidade;
    }
  }
  salgado *= 0.9;
  doce *= 0.85;
  bebida *= 0.7;
  preco = salgado + doce + bebida;

  if (ehPrimeiraCompra) {
    switch (cupomDesconto) {
      case 'NATAL10':
        if (preco > 3000) preco *= 0.9;
        break;
      case 'NATAL20':
        if (preco > 4500) preco *= 0.8;
        break;
      case 'NATAL30':
        if (preco > 6000) preco *= 0.7;
        break;
      case 'NATALSUPREMO':
        if (preco > 8000) {
          preco *= 0.7;
          frete = 0;
        }
        break;
      default:
        break;
    }
  }
  console.log(preco + frete);
}
