
const triangulo = (...params) => {
  // validación de entrada
  const esTriangulo = [...params]
  if (esTriangulo.length > 3) return 'Deben mandarse solo 3 valores'
  let sumaAngulos = 0
  for (let i = 0; i < 3; i++) {
    sumaAngulos += esTriangulo[i]
    if (esTriangulo[i] === 0 || esTriangulo[i] === undefined) return 'Los datos ingresados deben dar como resultado 180°'
  }
  if (sumaAngulos !== 180) return 'No es una triangulo'

  const angulos = params.sort((a, b) => a + b) // ordenar los datos de mayor a menor
  const [hip, cat2, cat1] = angulos // definición de ángulos

  if ((hip * hip) > ((cat2 * cat2) + (cat1 * cat1))) return 'Triangulo obtusángulo'
  if ((hip * hip) === ((cat2 * cat2) + (cat1 * cat1))) return 'Triangulo recto'
  if ((hip * hip) < ((cat2 * cat2) + (cat1 * cat1))) return 'Triangulo agudo'
}

console.log(triangulo(62, 59, 59))
