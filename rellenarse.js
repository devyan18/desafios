const codi = (works) => {
  const codification = (works) => {
    let work = works.toString()
    const noWork = work.length
    if(  noWork % 5 == 0 ){
      return work 
    } 
    else{
      const len = work.length % 5
      const arr = (5 - len)
      for(let i = 0; i < arr ; i++){
        work += arr
      } 
      return work
    } 
  }
  const param = codification(works)
  console.log("Codificado: ", param)


  const decodification = (works) => {
    const deleting = parseInt(works[works.length-1])
    if(!deleting){
      return(works)
    }else{
      const find = works.length - deleting
      return(works.slice(0, find))
    }
  }

  const paramD = decodification(works)
  console.log("Decodificado: ", paramD)
}

codi("")
