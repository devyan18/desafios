const costoTotal = (unidad = 0) => {
  if(typeof(unidad) !== 'number') return "Debe ingresar un número"
  const result = 6620 + ((81 - (unidad*unidad)) / (9 - unidad))
  if (!result) {
    const acercamiento = unidad + 0.000000001
    let resultAprox = 6620 + ((81 - (acercamiento*acercamiento)) / (9 - acercamiento))
    return `El resultado de la funcion cuando X tiende a ${unidad} es: aproximadamente ${Math.round(resultAprox)} aproximando por derecha` 
  }
  if(result) return `El resultado de la funcion cuando X tiende a ${unidad} es: ${result}`
}
costoTotal(1);
costoTotal(9)