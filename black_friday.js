function solucao(produtos, valorMaximo, avaliacaoMinima) {
  // seu código aqui
  const resultado = produtos.filter(
    (produto) =>
      produto.valor <= valorMaximo && produto.avaliacao >= avaliacaoMinima
  );
  console.log(resultado);
}
