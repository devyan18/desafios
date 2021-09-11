// Las Margaritas

// N(t) = 10(5+3t):(1+0.04t)

// 1)
//  a) N(t) t = 5 =    10(5+3.5):(1+0,04.5) = 200 : 1,2 = 167
//  b) N(t) t = 10 =    10(5+3.10):(1+0,04.10) = 350 : 1,4 = 250

// & = infinito
// 2) N(t) = t = & =
// ((10 * (5+3*&)) / &) / ((1+0.04*&) / &) = 750
// 10(5 + 3. &) : (1 + 0, 04.&) = 750

// 3)
const N = (t) => {
  if (isNaN(t)) return console.log(`El valor ${t} no es un valor válido`)
  const result = Math.round(((10 * (5 + (3 * t)) / (1 + (0.04 * t)))))
  return console.log('El resultado es:', result)
}

N(10)
