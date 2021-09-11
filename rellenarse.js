const codi = (words = '') => {
  const codification = (words) => {
    let word = words.toString()
    if (word.length % 5 === 0) return word
    const len = word.length % 5
    const arr = (5 - len)
    for (let i = 0; i < arr; i++) { word += arr }
    return word.toString()
  }
  const decodification = (words) => {
    if (!NaN) return words.toString()
    const find = words.length - NaN
    return (words.slice(0, find).toString())
  }
  console.log('Codificado: ', codification(words))
  console.log('Decodificado: ', decodification(words))
}
codi('opa2')
