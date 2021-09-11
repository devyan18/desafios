const triangulo = (...params) => {
  const esTriangulo = [...params]
  if (esTriangulo.length > 3) return 'Deben mandarse solo 3 valores'
  let sumaAngulos = 0
  for (let i = 0; i < 3; i++) {
    sumaAngulos += esTriangulo[i]
    if (esTriangulo[i] === 0 || esTriangulo[i] === undefined) return 'Los datos ingresados deben ser mayores a 0'
  }
  const angulos = esTriangulo.sort((a, b) => a - b)// ordenar los datos de menor a mayor
  const [cat1, cat2, hip] = angulos // definición de ángulos
  if ((hip**2) > ((cat2**2) + (cat1**2))) return 'Triangulo obtusángulo'
  if ((hip**2) === ((cat2**2) + (cat1**2))) return 'Triangulo recto'
  if ((hip**2) < ((cat2**2) + (cat1**2))) return 'Triangulo agudo'
}

console.log(triangulo(1,2,3))