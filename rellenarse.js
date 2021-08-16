const codi = (works = "") => {
  const codification = (works) => {
    let work = works.toString()
    if(work.length % 5 == 0) return work 
    const len = work.length % 5
    const arr = (5 - len)
    for(let i = 0; i < arr ; i++){work += arr} 
    return work.toString()
  }
  const decodification = (works) => {
    const deleting = parseInt(works[works.length-1])
    if(!deleting)return works.toString()
    const find = works.length - deleting
    return(works.slice(0, find).toString())
  } 
  console.log("Codificado: ", codification(works))
  console.log("Decodificado: ", decodification(works))
}
codi("holanda")
