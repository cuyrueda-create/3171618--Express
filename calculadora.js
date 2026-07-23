function calcularIVA(precioBase, porcentajeIVA = 19) {

  const valorIVA = precioBase * (porcentajeIVA / 100);
  const precioTotal = precioBase + valorIVA;

  return {
    precioBase,
    valorIVA,
    precioTotal
  };
}

console.log("Prueba de cálculo:", calcularIVA(100000));